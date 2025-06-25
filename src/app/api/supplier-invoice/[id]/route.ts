import { logAction } from "@/lib/audit";
import { authOptions } from "@/lib/authOptions";
import prisma from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

export async function PATCH(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
	try {

		const session = await getServerSession(authOptions)

		if (!session || session.user.office !== "ADMIN") {
			return new Response("Não autorizado", { status: 401 })
		}

		const { id } = await params

		const body = await req.json()

		const updatedInvoice = await prisma.supplierInvoice.update({
			where: { id },
			data: {
				title: body.title,
				description: body.description,
				amount: body.amount,
				dueDate: body.dueDate ? new Date(body.dueDate) : undefined,
				fileUrl: body.fileUrl || undefined,
				supplierId: body.supplierId || undefined,
				status: body.status || undefined
			}
		})

		await logAction({
			userId: session.user.id,
			action: "update",
			entity: "supplierInvoice",
			entityId: id,
			description: `Boleto atualizado: ${updatedInvoice.title}`,
		})

		return NextResponse.json(updatedInvoice)

	} catch (error) {
		console.error("Erro ao atualizar boleto:", error)
		return NextResponse.json({ error: "Erro ao atualizar boleto" }, { status: 500 })
	}
}

export async function DELETE(_: NextRequest, { params }: { params: Promise<{ id: string }> }) {
	try {
		const session = await getServerSession(authOptions)

		if (!session || session.user.office !== "ADMIN") {
			return new Response("Unauthorized", { status: 401 })
		}

		const { id } = await params

		const deleteInvoice = await prisma.supplierInvoice.delete({
			where: { id }
		})

		await logAction({
			userId: session.user.id,
			action: "delete",
			entity: "supplierInvoice",
			entityId: id,
			description: `Boleto excluído`,
		})

		return NextResponse.json({ message: "Boleto excluído com sucesso" })

	} catch (error) {
		console.error("Erro ao excluir boleto:", error)
		return NextResponse.json({ error: "Erro ao excluir boleto" }, { status: 500 })
	}
}