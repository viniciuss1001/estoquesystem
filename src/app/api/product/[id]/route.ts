import { authOptions } from "@/lib/authOptions";
import prisma from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

export async function GET(_: NextRequest, { params }: { params: { id: string } }) {

	const product = await prisma.product.findUnique({
		where: { id: params.id }
	})

	if (!product) {
		return NextResponse.json({ error: "Produto não encontrado" }, { status: 404 })
	}

	return NextResponse.json(product)

}

export async function PATCH(req: NextRequest, { params }: { params: { id: string } }) {

	try {
		const session = await getServerSession(authOptions);

		if (!session || session.user.office !== "ADMIN") {
			return new Response("Unauthorized", { status: 401 });
		}

		const body = await req.json()

		const product = await prisma.product.update({
			where: { id: params.id },
			data: {
				name: body.name,
				sku: body.sku,
				quantity: Number(body.quantity),
				price: Number(body.price),
				category: body.category,
			}
		})

		return NextResponse.json(product)

	} catch (error) {
		console.error(error)
		return NextResponse.json({ error: "Erro ao atualizar produto" }, { status: 500 })
	}
}

export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
	try {
		const session = await getServerSession(authOptions);

		if (!session || session.user.office !== "ADMIN") {
			return new Response("Unauthorized", { status: 401 });
		}

		await prisma.product.delete({ where: { id: params.id } })

		return NextResponse.json({ mensagem: "Produto deletado com sucesso" })
	} catch (error) {
		console.error(error)
		return NextResponse.json({ error: "Erro ao deletar produto" }, { status: 500 })
	}
}