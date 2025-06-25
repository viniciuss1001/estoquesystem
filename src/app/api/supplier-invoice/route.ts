import { logAction } from "@/lib/audit";
import { authOptions } from "@/lib/authOptions";
import prisma from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
	try {
		const session = await getServerSession(authOptions)
		if (!session || session.user.office !== "ADMIN") {
			return new Response("Não autorizado", { status: 401 })
		}

		const body = await req.json()

		const invoice = await prisma.supplierInvoice.create({
			data: {
				title: body.title,
				description: body.description,
				amount: body.amount,
				dueDate: new Date(body.dueDate),
				fileUrl: body.fileUrl || null,
				supplier: { connect: { id: body.supplierId } },
				status: "PENDING"
			}
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
			include: {
				supplier: true
			}
		})

		return NextResponse.json(invoices)

	} catch (error) {
		 console.error("Erro ao buscar boletos:", error)
    return NextResponse.json({ error: "Erro ao buscar boletos" }, { status: 500 })
	}
}