import { logAction } from "@/lib/audit";
import { authOptions } from "@/lib/authOptions";
import prisma from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

export async function PATCH(req: NextRequest, { params }: { params: { id: string } }) {
	try {
		const session = await getServerSession(authOptions);

		if (!session || session.user.office !== "ADMIN") {
			return new Response("Unauthorized", { status: 401 });
		}

		const body = await req.json()

		const category = await prisma.category.update({
			where: {
				id: params.id
			},
			data: {
				name: body.name
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

export async function DELETE(_: NextRequest, { params }: { params: { id: string } }) {

	try {
		const session = await getServerSession(authOptions);

		if (!session || session.user.office !== "ADMIN") {
			return new Response("Unauthorized", { status: 401 });
		}
		const categoryId = params.id

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
			entityId: params.id,
			description: `Categoria deletada: ${params.id}}`
		})

		return new NextResponse(null, { status: 204 })
	} catch (error) {
		console.error(error)
		return NextResponse.json({ error: "Erro ao deletar categoria" }, { status: 500 })
	}
}