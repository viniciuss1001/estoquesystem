import prisma from "@/lib/prisma"
import { NextResponse } from "next/server"


export async function GET() {
	try {
		const warehouses = await prisma.wareHouse.findMany({
			include: {
				warehouseProduct: {
					include: {
						product: true
					}
				}
			}
		})

		const result = warehouses.map(warehouse => ({
			warehouseId: warehouse.id,
			warehouseName: warehouse.name,
			location: warehouse.location,
			products: warehouse.warehouseProduct.map(wp => ({
				productId: wp.product.id,
				name: wp.product.name,
				sku: wp.product.sku,
				quantity: wp.quantity
			}))
		}))

		return NextResponse.json(result)
	} catch (error) {
		console.error("Erro ao listar produtos por armazém:", error)
		return NextResponse.json({ error: "Erro ao buscar dados" }, { status: 500 })
	}
}