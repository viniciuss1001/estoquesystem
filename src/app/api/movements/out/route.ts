import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
	try {

		const { productId, quantity } = await req.json()

		const product = await prisma.product.findUnique({
			where: { id: productId }
		})

		if (!product || product.quantity < quantity) {
			return NextResponse.json({ error: "Estoque insuficiente" }, { status: 400 })
		}

		const updatedProduct = await prisma.product.update({
			where: {id: productId},
			data: {
				quantity: {decrement: quantity}
			}
		})

		await prisma.stockMovement.create({
			data:{
				type: "SAIDA",
				quantity, productId
			}
		})

		return NextResponse.json({ message: "Saída registrada", product: updatedProduct })

	} catch (error) {
		console.error(error)
		return NextResponse.json({ error: "Erro ao registrar saída" }, { status: 500 })
	}
}