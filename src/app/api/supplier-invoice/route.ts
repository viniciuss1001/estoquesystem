
import { logAction } from "@/lib/audit";
import { requireSession } from "@/lib/auth";
import { notifyByUserRole } from "@/lib/notifications";
import prisma from "@/lib/prisma";
import { writeFile } from "fs/promises";
import { NextRequest, NextResponse } from "next/server";
import path from "path";

export async function POST(req: NextRequest) {
	try {
		const { session, error: sessionError } = await requireSession()
		if (sessionError) return sessionError

		const companyId = session.user.companyId

		if (!companyId) {
			return NextResponse.json({ error: "Usuário sem empresa associada." }, { status: 400 })
		}

		const body = await req.formData()
		// console.log("dados recebidos", body)

		const title = body.get("title") as string
		const description = body.get("description") as string
		const amount = parseFloat(body.get("amount") as string)
		const dueDate = new Date(body.get("dueDate") as string)
		const providerId = body.get("providerId") as string
		const providerType = body.get("providerType") as "SUPPLIER" | "SERVICE_PROVIDER"
		const file = body.get("file") as File | null

		if (!providerId || !providerType) {
			return NextResponse.json({ error: "Dados do fornecedor inválidos" }, { status: 400 })
		}

		let fileUrl: string | null = null

		if (file) {
			const bytes = await file.arrayBuffer()
			const buffer = Buffer.from(bytes)

			const fileName = `${Date.now()}-${file.name}`
			const filePath = path.join(process.cwd(), "public", "uploads", fileName)
			await writeFile(filePath, buffer)

			fileUrl = `/uploads/${fileName}`
		}

		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		const data: any = {
			title,
			description,
			amount,
			dueDate,
			fileUrl: fileUrl ?? undefined,
			status: "PENDING",
			companyId
		}

		if (providerType === "SUPPLIER") {
			data.supplierId = providerId
		} else if (providerType === "SERVICE_PROVIDER") {
			data.serviceProviderId = providerId
		} else {
			return NextResponse.json({ error: "Tipo de fornecedor inválido" }, { status: 400 })
		}

		const invoice = await prisma.supplierInvoice.create({ data })

		await notifyByUserRole({
			title: "Novo boleto adicionado",
			message: `Novo boleto: ${invoice.title} com vencimento para ${invoice.dueDate.toLocaleDateString()}`,
			roles: ["GESTOR"]
		})

		await notifyByUserRole({
			title: "Novo boleto criado por gestor",
			message: `${session.user.name} criou o boleto ${invoice.title}`,
			roles: ["ADMIN"]
		})

		await logAction({
			userId: session.user.id,
			action: "create",
			entity: "supplierInvoice",
			entityId: invoice.id,
			description: `Boleto criado: ${invoice.title}`
		})

		return NextResponse.json(invoice)

	} catch (error) {
		console.error("Erro ao criar boleto:", error)
		return NextResponse.json({ error: "Erro ao criar boleto" }, { status: 500 })
	}
}

export async function GET(req: NextRequest) {
	try {
		const { session, error: sessionError } = await requireSession()
		if (sessionError) return sessionError

		const companyId = session.user.companyId

		if (!companyId) {
			return NextResponse.json({ error: "Usuário sem empresa associada." }, { status: 400 })
		}

		const { searchParams } = new URL(req.url)

		const supplierId = searchParams.get("supplierId") || undefined
		const status = searchParams.get("status") as "PENDING" | "PAID" | "CANCELED" | undefined
		const dueDateFrom = searchParams.get("dueDateFrom")
		const dueDateTo = searchParams.get("dueDateTo")

		const invoices = await prisma.supplierInvoice.findMany({
			where: {
				...(supplierId && {
					OR: [
						{ supplierId: supplierId },
						{ serviceProviderId: supplierId }
					]
				}),
				...(status && { status }),
				...(dueDateFrom || dueDateTo
					? {
						dueDate: {
							...(dueDateFrom && { gte: new Date(dueDateFrom) }),
							...(dueDateTo && { lte: new Date(dueDateTo) }),
						},
					}
					: {}),
					
				companyId,
			},
			orderBy: { dueDate: "asc" },
			select: {
				id: true,
				title: true,
				description: true,
				amount: true,
				dueDate: true,
				status: true,
				createdAt: true,
				supplier: {
					select: { id: true, name: true }
				},
				serviceProvider: {
					select: { id: true, name: true }
				},
			},
		})

		return NextResponse.json(invoices)
	} catch (error) {
		console.error("Erro ao buscar boletos:", error)
		return NextResponse.json({ error: "Erro ao buscar boletos" }, { status: 500 })
	}
}