import { logAction } from "@/lib/audit";
import { requireSession } from "@/lib/auth";
import { notifyByUserRole } from "@/lib/notifications";
import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
	try {
		const { session, error: sessionError } = await requireSession()
		if (sessionError) return sessionError

		const body = await req.json()
		const companyId = session.user.companyId

		if (!companyId) {
			return NextResponse.json({ error: "Usuário sem empresa associada." }, { status: 400 })
		}

		const delivery = await prisma.delivery.create({
			data: {
				quantity: body.quantity,
				expectedAt: new Date(body.expectedAt),
				product: {
					connect: { id: body.productId }
				},
				supplier: {
					connect: { id: body.supplierId }
				},
				warehouse: {
					connect: { id: body.warehouseId }
				},
				supplierInvoice: body.supplierInvoiceId ? { connect: { id: body.supplierInvoiceId }, } : undefined,
				company: { connect: { id: companyId } }
			}
		})

		await notifyByUserRole({
			title: "Nova entrega adicionada",
			message: `Entrega do produto prevista para ${delivery.expectedAt}`,
			roles: ["GESTOR"]
		})

		await notifyByUserRole({
			title: "Entrega registrada por Gestor",
			message: `${session.user.name} criou uma nova entrega.`,
			roles: ["ADMIN"]
		})


		await logAction({
			companyId: session.user.companyId!,
			userId: session.user.id,
			action: "create",
			entity: "delivery",
			entityId: delivery.id,
			description: `Entrega criada para o produto ${body.productId.name} com quantidade ${body.quantity}`
		})

		return NextResponse.json(delivery, { status: 201 })


	} catch (error) {
		console.error(error)
		return NextResponse.json({ error: "Erro ao criar entrega" }, { status: 500 })
	}
}

export async function GET(req: NextRequest) {
	try {

		const { session, error: sessionError } = await requireSession()

		if (sessionError) {
			return sessionError
		}

		const companyId = session?.user.companyId
		if (!companyId) {
			return NextResponse.json({ error: "Usuário sem empresa associada." }, { status: 400 })
		}

		const { searchParams } = new URL(req.url)

		const productId = searchParams.get("productId") || undefined
		const supplierId = searchParams.get("supplierId") || undefined
		const warehouseId = searchParams.get("warehouseId") || undefined
		const status = searchParams.get("status") as "PENDING" | "COMPLETED" | "CANCELED" | "LATE" | undefined
// eslint-disable-next-line @typescript-eslint/no-explicit-any
		const where: any = {
			...(productId && { productId }),
			...(supplierId && { supplierId }),
			...(warehouseId && { warehouseId }),
			...(status && { status }),
			companyId
		}

		const deliveries = await prisma.delivery.findMany({
			where,
			orderBy: { createdAt: "desc" },
			include: {
				product: {
					select: {
						id: true,
						name: true
					}
				},
				supplier: {
					select: {
						id: true,
						name: true

					}
				},
				warehouse: {
					select: {
						id: true,
						name: true
					}
				},
				supplierInvoice: {
					select: {
						id: true,
						title: true
					}
				},
			}
		})

		return NextResponse.json(deliveries)

	} catch (error) {
		console.error(error)
		return NextResponse.json({ error: "Erro ao buscar entregas" }, { status: 500 })
	}
}