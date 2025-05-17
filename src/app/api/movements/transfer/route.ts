import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
	try {

		const { productId, originId, destinationId, quantity } = await req.json()

		const product = await prisma.product.findUnique({
			where: { id: productId }
		})

		if (!product || product.quantity < quantity) {
			return NextResponse.json({ error: "Estoque insuficiente para transferência" }, { status: 400 })
		}

		const updatedProduct = await prisma.product.update({
			where: { id: productId },
			data: {
				quantity: { decrement: quantity }
			}
		})

		await prisma.stockMovement.create({
			data: {
				type: "TRANSFERENCIA",
				quantity,
				productId,
				originId,
				destinationId,
			}
		})
		return NextResponse.json({ message: "Transferência registrada", product: updatedProduct })

	} catch (error) {
		console.error(error)
		return NextResponse.json({ error: "Erro ao registrar transferência" }, { status: 500 })
	}
}