
import { logAction } from "@/lib/audit";
import { authOptions } from "@/lib/authOptions";
import prisma from "@/lib/prisma";
import { writeFile } from "fs/promises";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import path from "path";

export async function POST(req: NextRequest) {
	try {
		const session = await getServerSession(authOptions)
		if (!session || session.user.office !== "ADMIN") {
			return new Response("Não autorizado", { status: 401 })
		}

		const formData = await req.formData()

		const title = formData.get("title") as string
		const description = formData.get("description") as string
		const amount = parseFloat(formData.get("amount") as string)
		const dueDate = new Date(formData.get("dueDate") as string)
		const supplierId = formData.get("supplierId") as string
		const file = formData.get("file") as File | null

		let fileUrl: string | null = null

		if(file) {
			const bytes = await file.arrayBuffer()
			const buffer = Buffer.from(bytes)

			const fileName = `${Date.now()}-${file.name}`
			const filePath = path.join(process.cwd(), "public", "uploads", fileName)
			await writeFile(filePath, buffer)

			fileUrl = `/uploads/${fileName}`
		}

		const invoice = await prisma.supplierInvoice.create({
			data: {
				title,
				description,
				amount,
				dueDate,
				supplierId,
				fileUrl: fileUrl ?? undefined,
				status: "PENDING"
			},
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
		console.error("Erro ao buscar boletos:", error)
		return NextResponse.json({ error: "Erro ao buscar boletos" }, { status: 500 })
	}
}

export async function GET() {
	try {
		
		const invoices = await prisma.supplierInvoice.findMany({
			orderBy: {dueDate: "asc"},
			select: {
				id: true, 
				title: true,
				description: true,
				amount: true,
				dueDate: true,
				status: true,
				createdAt: true, 
				supplier: {select: {name: true}}
			}
		})

		return NextResponse.json(invoices)

	} catch (error) {
		 console.error("Erro ao buscar boletos:", error)
    return NextResponse.json({ error: "Erro ao buscar boletos" }, { status: 500 })
	}
}