import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
	try {
		const {productId, quantity} = await req.json()

		const product = await prisma.product.update({
			where: {id: productId},
			data: {quantity: {
				increment: quantity
			}}
		})

		await prisma.stockMovement.create({
			data: {
				type: "ENTRADA",
				quantity, 
				productId
			}
		})

		return NextResponse.json({ message: "Entrada registrada", product })

	} catch (error) {
		console.error(error)
		return NextResponse.json({ error: "Erro ao registrar entrada" }, { status: 500 })
	}
}