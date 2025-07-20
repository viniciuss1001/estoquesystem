import { requireSession } from "@/lib/auth"
import prisma from "@/lib/prisma"
import { NextResponse } from "next/server"


export async function GET() {
	try {
		const { session, error: sessionError } = await requireSession()
		if (sessionError) return sessionError

		const companyId = session.user.companyId

		if (!companyId) {
			return NextResponse.json({ error: "Usuário sem empresa associada." }, { status: 400 })
		}

		const now = new Date()
		const next7Days = new Date()
		next7Days.setDate(now.getDate() + 7)

		const invoices = await prisma.supplierInvoice.findMany({
			where: {
				dueDate: {
					gte: now,
					lte: next7Days
				},
				status: "PENDING", 
				companyId
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