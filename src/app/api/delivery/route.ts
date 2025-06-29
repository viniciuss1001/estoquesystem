import { logAction } from "@/lib/audit";
import { requireSession } from "@/lib/auth";
import { authOptions } from "@/lib/authOptions";
import prisma from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
	try {
		const session = await getServerSession(authOptions)

		if (!session || session.user.office !== "ADMIN") {
			return new Response("Unauthorized", { status: 401 })
		}

		const body = await req.json()

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
				supplierInvoice: body.supplierInvoiceId ? { connect: { id: body.supplierInvoiceId }, } : undefined
			}
		})

		await logAction({
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

		const { searchParams } = new URL(req.url)

		const productId = searchParams.get("productId") || undefined
		const supplierId = searchParams.get("supplierId") || undefined
		const warehouseId = searchParams.get("warehouseId") || undefined
		const status = searchParams.get("status") as "PENDING" | "COMPLETED" | "CANCELED" | "LATE" | undefined

		const where: any = {
			...(productId && { productId }),
			...(supplierId && { supplierId }),
			...(warehouseId && { warehouseId }),
			...(status && { status }),
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
				}
			}
		})

		return NextResponse.json(deliveries)

	} catch (error) {
		console.error(error)
		return NextResponse.json({ error: "Erro ao buscar entregas" }, { status: 500 })
	}
}