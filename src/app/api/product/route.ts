import { logAction } from "@/lib/audit";
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
				supplier: {
					connect: {
						id: body.supplier
					}
				},
				price: body.price,
				quantity: body.quantity,
				category: {
					connect: {
						name: body.category
					},
				},
			},
		});

		await logAction({
			userId: session.user.id,
			action: "create",
			entity: "product",
			entityId: product.id,
			description: `Produto criado: ${product.name}`
		})

		return Response.json(product, { status: 201 });

	} catch (error) {
		console.error(error)
		return NextResponse.json({ error: "Erro ao criar produto" }, { status: 500 })
	}
}

export async function GET() {
	try {
		const products = await prisma.product.findMany({
			orderBy: { createdAt: "desc" },
			include: { 
				category: true,
				supplier: true

			 }
		})

		return NextResponse.json(products)
	} catch (error) {
		console.error(error)
		return NextResponse.json({ error: "Erro ao buscar produto" }, { status: 500 })
	}
}