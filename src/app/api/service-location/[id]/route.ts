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

		const serviceLocation = await prisma.serviceLocation.findUnique({
			where: { id, companyId }
		})

		if (!serviceLocation) {
			return NextResponse.json({ error: "Local de serviço não encontrado." })
		}

		return NextResponse.json(serviceLocation)

	} catch (error) {
		console.log(error)
		return NextResponse.json({ error: "Erro ao buscar local de serviço." })
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

		const body = await req.json()
		const { name, address } = body

		const { id } = await params

		const updatedLocaleService = await prisma.serviceLocation.update({
			where: { id, companyId },
			data: { name, address }
		})

		await logAction({
			userId: session.user.id,
			action: "update",
			entity: "serviceLocate",
			entityId: updatedLocaleService.id,
			description: `Local de serviço alterado: ${updatedLocaleService.name}`
		})

		return NextResponse.json(updatedLocaleService)

	} catch (error) {
		console.log(error)
		return NextResponse.json({ error: "Erro ao atualizar o local de serviço" })
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

		await prisma.serviceLocation.delete({
			where: { id, companyId }
		})

		await logAction({
			userId: session.user.id,
			action: "delete",
			entity: "serviceLocate",
			entityId: id,
			description: `Local de serviço excluído: ${id}`
		});

		return NextResponse.json({ message: "Local de serviço deletado com sucesso." })
	} catch (error) {
		console.log(error)
		return NextResponse.json({ error: "Erro ao deletar local de serviço." }, { status: 500 })
	}
}