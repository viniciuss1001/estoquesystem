import { requireSession } from "@/lib/auth";
import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
	const { error: sessionError } = await requireSession()
	if (sessionError) return sessionError

	const invoices = await prisma.supplierInvoice.findMany({
		where: {
			dueDate: {
				lt: new Date()
			},
			status: "PENDING"
		},
		include: {
			supplier: true
		}
	})

	return NextResponse.json(invoices)
}