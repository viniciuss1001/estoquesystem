import { logAction } from "@/lib/audit";
import { authOptions } from "@/lib/authOptions";
import prisma from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

export async function GET(_: NextRequest, context: { params: { id: string } }) {

	const { id } = context.params

	try {
		const delivery = await prisma.delivery.findUnique({
			where: { id },
			include: {
				product: true,
				supplier: true
			}
		})

		if (!delivery) {
			return NextResponse.json({ error: "Entrega não encontrada." })
		}

		return NextResponse.json(delivery)

	} catch (error) {
		console.error(error)
		return NextResponse.json({ error: "Erro ao buscar entrega" }, { status: 500 })
	}

}

export async function PATCH(req: NextRequest, context: { params: { id: string } }) {

	const { id } = context.params
	const session = await getServerSession(authOptions)

	if (!session || session.user.office !== "ADMIN") {
		return new Response("Unauthorized", { status: 401 });
	}

	try {
		const body = await req.json()

		const updatedDelivery = await prisma.delivery.update({
			where: { id },
			data: {
				quantity: body.quantity,
				expectedAt: new Date(body.expectedAt),
				product: body.productId ? { connect: { id: body.productId } } : undefined,
				supplier: body.supplierId ? { connect: { id: body.supplierId } } : undefined,
			},
		})

		await logAction({
			userId: session.user.id,
			action: "update",
			entity: "delivery",
			entityId: updatedDelivery.id,
			description: `Entrega alterada para o produto ${body.productId} com quantidade ${body.quantity}`
		})

		return NextResponse.json(updatedDelivery)

	} catch (error) {
		console.error(error)
		return NextResponse.json({ error: "Erro ao atualizar entrega" }, { status: 500 })
	}


}

export async function DELETE(_: NextRequest, context: { params: { id: string } }) {
	const { id } = context.params;
	const session = await getServerSession(authOptions)

	if (!session || session.user.office !== "ADMIN") {
		return new Response("Unauthorized", { status: 401 })
	}

	try {
		await prisma.delivery.delete({
			where: { id }
		})

		await logAction({
			userId: session.user.id,
			action: "delete",
			entity: "delivery",
			entityId: id,
			description: `Entrega excluida`
		})

	} catch (error) {
		console.log(error)
		return NextResponse.json({ error: "Erro ao deletar entrega" })
	}
}