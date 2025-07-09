import { logAction } from "@/lib/audit";
import { requireSession } from "@/lib/auth";
import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(_: NextRequest, { params }: { params: Promise<{ id: string }> }) {

	try {

		const { session, error: sessionError } = await requireSession()
		if (sessionError) return sessionError

		const { id } = await params

		const provider = await prisma.serviceProvider.findUnique({
			where: { id }
		})

		return NextResponse.json(provider)


	} catch (error) {
		console.log(error)
		return NextResponse.json({ error: "Erro ao buscar prestador de serviço." }, { status: 500 });
	}
}

export async function PATCH(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
	try {
		const { session, error: sessionError } = await requireSession()
		if (sessionError) return sessionError

		const { id } = await params

		const body = await req.json()
		const { name, email, phone, cnpj, description } = body

		const updatedServiceProvider = await prisma.serviceProvider.update({
			where: { id },
			data: {
				name,
				email,
				phone,
				cnpj, 
				description
			}
		})

		await logAction({
			userId: session.user.id,
			action: "update",
			entity: "serviceProvider",
			entityId: updatedServiceProvider.id,
			description: `Prestador de serviço alterado: ${updatedServiceProvider.name}`
		})

		return NextResponse.json(updatedServiceProvider)

	} catch (error) {
		console.log(error)
		return NextResponse.json({ error: "Erro ao atualizar prestador de serviço." }, { status: 500 })
	}
}

export async function DELETE(_: Request, { params }: { params: Promise<{ id: string }> }) {
	try {

		const { session, error: sessionError } = await requireSession()
		if (sessionError) return sessionError

		const { id } = await params

		await prisma.serviceProvider.delete({
			where: { id }
		})

		await logAction({
			userId: session.user.id,
			action: "delete",
			entity: "serviceProvider",
			entityId: id,
			description: `Prestador de serviço excluído: ${id}`
		})

		return NextResponse.json({ message: "Prestador de serviço deletado com sucesso." })

	} catch (error) {
		console.log(error)
		return NextResponse.json({ error: "Erro ao deletar prestador de serviço." }, { status: 500 })
	}
}