import { logAction } from "@/lib/audit";
import { requireSession } from "@/lib/auth";
import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(_: NextRequest, { params }: { params: Promise<{ id: string }> }) {
	try {
		const { session, error: sessionError } = await requireSession()
		if (sessionError) return sessionError

		const companyId = session.user.companyId

		if (!companyId) {
			return NextResponse.json({ error: "Usuário sem empresa associada." }, { status: 400 })
		}

		const { id } = await params

		const invoice = await prisma.supplierInvoice.findUnique({
			where: { id, companyId },
			include: {
				supplier: true,
				serviceProvider: true,
			},
		})

		if (!invoice) {
			return NextResponse.json({ error: "Boleto não encontrado" }, { status: 404 })
		}

		return NextResponse.json(invoice)
	} catch (error) {
		console.error("Erro ao buscar boleto:", error)
		return NextResponse.json({ error: "Erro ao buscar boleto." }, { status: 500 })
	}
}


export async function PATCH(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
	try {

		const { session, error: sessionError } = await requireSession()
		if (sessionError) return sessionError

		const companyId = session.user.companyId

		if (!companyId) {
			return NextResponse.json({ error: "Usuário sem empresa associada." }, { status: 400 })
		}

		const { id } = await params

		const body = await req.json()

		if (body.providerType === "SUPPLIER") {
			const exists = await prisma.supplier.findUnique({ where: { id: body.supplierId } })
			if (!exists) throw new Error("Fornecedor não encontrado.")
		} else {
			const exists = await prisma.serviceProvider.findUnique({ where: { id: body.supplierId } })
			if (!exists) throw new Error("Prestador de serviço não encontrado.")
		}

		const updatedInvoice = await prisma.supplierInvoice.update({
			where: { id, companyId },
			data: {
				title: body.title,
				description: body.description,
				amount: body.amount,
				dueDate: body.dueDate ? new Date(body.dueDate) : undefined,
				fileUrl: body.fileUrl || undefined,
				status: body.status || undefined,

				supplierId: body.providerType === "SUPPLIER" ? body.supplierId : null,
				serviceProviderId: body.providerType === "SERVICE_PROVIDER" ? body.supplierId : null,
			}
		})

		await logAction({
			companyId: session.user.companyId!,
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
		const { session, error: sessionError } = await requireSession()
		if (sessionError) return sessionError

		const companyId = session.user.companyId

		if (!companyId) {
			return NextResponse.json({ error: "Usuário sem empresa associada." }, { status: 400 })
		}

		const { id } = await params

		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		const deleteInvoice = await prisma.supplierInvoice.delete({
			where: { id, companyId }
		})

		await logAction({
			companyId: session.user.companyId!,
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