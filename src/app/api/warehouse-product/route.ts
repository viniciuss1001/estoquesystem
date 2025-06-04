import { authOptions } from "@/lib/authOptions";
import prisma from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
	try {
		const session = await getServerSession(authOptions)

		if (!session || session.user.office !== "ADMIN") {
			return new Response("Unauthorized", { status: 401 })
		}

		const body = await req.json()

		const { warehouseId, productId, quantity, } = body

		if (!warehouseId || !productId) {
			return new NextResponse("warehouseId e productId são obrigatórios", { status: 400 })
		}

		const warehouseProduct = await prisma.warehouseProduct.create({
			data: {
				warehouseId,
				productId,
				quantity: quantity ?? 0,
				
			}
		})

		return NextResponse.json(warehouseProduct)

	} catch (error) {
		console.error(error)
		return new NextResponse("Erro ao criar relação armazém-produto", { status: 500 })
	}
}

export async function GET( ){
	try {
		const session = await getServerSession(authOptions)

		if (!session || session.user.office !== "ADMIN") {
			return new Response("Unauthorized", { status: 401 })
		}

		const warehouseProducts = await prisma.warehouseProduct.findMany({
			include: {
				warehouse: true,
				product: true
			}
		})

		return NextResponse.json(warehouseProducts)

	} catch (error) {
		
	}
}