import { logAction } from "@/lib/audit";
import { authOptions } from "@/lib/authOptions";
import prisma from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

export async function GET(_: NextRequest, { params }: { params: Promise<{ id: string }> }) {

	const { id } = await params

	const product = await prisma.product.findUnique({
		where: { id },
		include: {
			category: true,
			supplier: true
		}
	})

	if (!product) {
		return NextResponse.json({ error: "Produto não encontrado" }, { status: 404 })
	}

	return NextResponse.json(product)

}

export async function PATCH(req: NextRequest, context: { params: { id: string } }) {

	try {
		const { id } = context.params
		const session = await getServerSession(authOptions);

		if (!session || session.user.office !== "ADMIN") {
			return new Response("Unauthorized", { status: 401 });
		}

		const body = await req.json()

		const product = await prisma.product.update({
			where: { id },
			data: {
				name: body.name,
				sku: body.sku,
				quantity: Number(body.quantity),
				price: Number(body.price),
				category: body.category
					? { connect: { id: body.category } }
					: undefined,
			}
		})
		try {
			await logAction({
				userId: session.user.id,
				action: "update",
				entity: "product",
				entityId: product.id,
				description: `Produto alterado: ${product.name}`
			})
		} catch (error) {
			return NextResponse.json({ error: "Erro ao criar o log de alteração do produto." })
		}

		return NextResponse.json(product)

	} catch (error) {
		console.error(error)
		return NextResponse.json({ error: "Erro ao atualizar produto" }, { status: 500 })
	}
}

export async function DELETE(req: NextRequest, context: { params: { id: string } }) {
	try {
		const { id } = context.params
		const session = await getServerSession(authOptions);

		if (!session || session.user.office !== "ADMIN") {
			return new Response("Unauthorized", { status: 401 });
		}

		await prisma.product.delete({ where: { id } })

		try {
			await logAction({
				userId: session.user.id,
				action: "delete",
				entity: "product",
				entityId: id,
				description: `Produto Deletado: ${id}`
			})
		} catch (error) {
			return NextResponse.json({ error: "Erro ao criar o log de deleção do produto." })
		}

		return NextResponse.json({ mensagem: "Produto deletado com sucesso" })
	} catch (error) {
		console.error(error)
		return NextResponse.json({ error: "Erro ao deletar produto" }, { status: 500 })
	}
}