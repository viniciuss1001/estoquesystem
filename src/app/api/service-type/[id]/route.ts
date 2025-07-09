import { logAction } from "@/lib/audit";
import { requireSession } from "@/lib/auth";
import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(_: NextRequest, { params }: { params: Promise<{ id: string }> }) {
	try {
		const { session, error: sessionError } = await requireSession()
		if (sessionError) return sessionError

		const { id } = await params

		const serviceType = await prisma.serviceType.findUnique({
			where: { id }
		})

		if (!serviceType) {
			return NextResponse.json({ error: "Tipo de serviço não encontrado." })
		}

		return NextResponse.json(serviceType)

	} catch (error) {
		console.log(error)
		return NextResponse.json({ error: "Erro ao buscar tipo de serviço." })
	}
}

export async function PATCH(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
	try {

		const { session, error: sessionError } = await requireSession()
		if (sessionError) return sessionError

		const body = await req.json()
		const { name } = body

		const { id } = await params

		const updatedServiceType = await prisma.serviceType.update({
			where: { id },
			data: { name }
		})

		await logAction({
			userId: session.user.id,
			action: "update",
			entity: "serviceType",
			entityId: updatedServiceType.id,
			description: `Tipo de serviço alterado: ${updatedServiceType.name}`
		})

		return NextResponse.json(updatedServiceType)

	} catch (error) {
		console.log(error)
		return NextResponse.json({ error: "Erro ao atualizar o tipo de serviço" })
	}
}

export async function DELETE(_: NextRequest, { params }: { params: Promise<{ id: string }> }) {
	try {
		const { session, error: sessionError } = await requireSession()
		if (sessionError) return sessionError

		const { id } = await params

		await prisma.serviceType.delete({
			where: { id }
		})

		await logAction({
			userId: session.user.id,
			action: "delete",
			entity: "serviceType",
			entityId: id,
			description: `Tipo de serviço excluído: ${id}`
		});

		return NextResponse.json({ message: "Tipo de serviço deletado com sucesso." })
	} catch (error) {
		console.log(error)
		return NextResponse.json({ error: "Erro ao deletar tipo de serviço." }, { status: 500 })
	}
}