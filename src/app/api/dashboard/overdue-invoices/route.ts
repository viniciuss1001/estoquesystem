import { requireSession } from "@/lib/auth";
import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
	const { session, error: sessionError } = await requireSession()
	if (sessionError) return sessionError

	const companyId = session.user.companyId

	if (!companyId) {
		return NextResponse.json({ error: "Usuário sem empresa associada." }, { status: 400 })
	}

	const invoices = await prisma.supplierInvoice.findMany({
		where: {
			dueDate: {
				lt: new Date()
			},
			status: "PENDING",
			companyId
		},
		include: {
			supplier: true
		}
	})

	return NextResponse.json(invoices)
}