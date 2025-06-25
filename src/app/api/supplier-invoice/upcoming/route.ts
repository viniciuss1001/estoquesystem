import prisma from "@/lib/prisma"
import { NextResponse } from "next/server"


export async function GET() {
	try {
		const now = new Date()
		const next7Days = new Date()
		next7Days.setDate(now.getDate() + 7)

		const invoices = await prisma.supplierInvoice.findMany({
			where: {
				dueDate: {
					gte: now,
					lte: next7Days
				},
				status: "PENDING"
			},
			select: {
				id: true,
				title: true,
				dueDate: true,
				supplier: { select: { name: true } },
				amount: true
			},
			orderBy: { dueDate: "asc" }
		})

		return NextResponse.json(invoices)

	} catch (error) {
		console.error("Erro ao buscar boletos próximos do vencimento:", error)
		return NextResponse.json({ error: "Erro interno" }, { status: 500 })
	}
}