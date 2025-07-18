import { logAction } from "@/lib/audit";
import { requireSession } from "@/lib/auth";
import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function PATCH(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
	try {
		const { session, error: sessionError } = await requireSession()
				if (sessionError) return sessionError

		const body = await req.json()
		const companyId = session.user.companyId

		if (!companyId) {
			return NextResponse.json({ error: "Usuário sem empresa associada." }, { status: 400 })
		}

		const category = await prisma.category.update({
			where: {
				id: (await params).id
			},
			data: {
				name: body.name, 
				companyId: companyId
			}
		})

		await logAction({
			userId: session.user.id,
			action: "update",
			entity: "category",
			entityId: category.id,
			description: `Categoria alterada: ${category.name}`
		})

		return NextResponse.json(category)


	} catch (error) {
		console.error(error)
		return NextResponse.json({ error: "Erro ao alterar categoria" }, { status: 500 })
	}
}

export async function DELETE(_: NextRequest, { params }: { params: Promise<{ categoryId: string }> }) {

	try {
		const { session, error: sessionError } = await requireSession()
		if (sessionError) return sessionError
		const { categoryId } = await params

		await prisma.product.updateMany({
			where: { categoryId },
			data: {
				categoryId: null
			}
		})

		await prisma.category.delete({
			where: {
				id: categoryId
			}
		})
		await logAction({
			userId: session.user.id,
			action: "delete",
			entity: "category",
			entityId: categoryId,
			description: `Categoria deletada: ${categoryId}}`
		})

		return new NextResponse(null, { status: 204 })
	} catch (error) {
		console.error(error)
		return NextResponse.json({ error: "Erro ao deletar categoria" }, { status: 500 })
	}
}