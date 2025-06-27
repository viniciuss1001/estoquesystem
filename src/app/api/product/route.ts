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

		const body = await req.json()

		const category = await prisma.category.findUnique({
			where: {
				name: body.category
			}
		})

		const productData: any = {
			name: body.name,
			sku: body.sku,
			supplier: body.supplier ? { connect: { id: body.supplier } } : undefined,
			price: body.price,
			quantity: body.quantity,
			unit: body.unit, 
			usageStatus: body.usageStatus,
			category: category ? { connect: { name: category.name } } : undefined
		}

		if(category?.name === "Perecível" && body.expirationDate) {
			productData.expirationDate = new Date(body.expirationDate)
		}

		const product = await prisma.product.create({
			data: productData
		})

		// after create produtc, register in warehouseproduct
		await prisma.warehouseProduct.create({
			data: {
				productId: product.id,
				warehouseId: body.warehouse,
				quantity: body.quantity
			}
		})

		// create movement type IN
		await prisma.stockMovement.create({
			data: {
				type: "IN",
				quantity: body.quantity,
				productId: product.id,
				originWarehouseId: null,
				destinationWarehouseId: body.warehouse,
				status: "COMPLETED",

			}
		})

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