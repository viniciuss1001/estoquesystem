import { authOptions } from "@/lib/authOptions";
import prisma from "@/lib/prisma"
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
	try {
		const session = await getServerSession(authOptions);

		if (!session || session.user.office !== "ADMIN") {
			return new Response("Unauthorized", { status: 401 });
		}

		const body = await req.json();

		const product = await prisma.product.create({
			data: {
				name: body.name,
				sku: body.sku,
				price: body.price,
				quantity: body.quantity,
				category: body.category || null,
			},
		});

		return Response.json(product, { status: 201 });

	} catch (error) {
		console.error(error)
		return NextResponse.json({ error: "Erro ao criar produto" }, { status: 500 })
	}
}

export async function GET() {
	try {
		const products = await prisma.product.findMany({
			orderBy: { createdAt: "desc" }
		})

		return NextResponse.json(products)
	} catch (error) {

	}
}