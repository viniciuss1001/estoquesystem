import prisma from "@/lib/prisma"
import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
	try {
		const token = req.headers.get("authorization")?.replace("Bearer ", "")
		if(!token){
			return NextResponse.json({error: "Não autorizado"}, {status: 401})
		}

		const {name, sku, quantity, price, category} = await req.json()

		const product = await prisma.product.create({
			data: {
				name, 
				sku, 
				quantity: Number(quantity),
				price: Number(price),
				category
			}
		})

		return NextResponse.json(product)

	} catch (error) {
		console.error(error)
		return NextResponse.json({ error: "Erro ao criar produto" }, { status: 500 })
	}
}

export async function GET() {
	try {
		const products = await prisma.product.findMany({
			orderBy: {createdAt: "desc"}
		})

		return NextResponse.json(products)
	} catch (error) {
		
	}
}