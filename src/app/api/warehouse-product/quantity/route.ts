
import prisma from "@/lib/prisma"
import { NextResponse } from "next/server"

export async function GET(req: Request) {
	const { searchParams } = new URL(req.url)
	const productId = searchParams.get("productId")
	const warehouseId = searchParams.get("warehouseId")

	if (!productId || !warehouseId) {
		return new NextResponse("Parâmetros obrigatórios ausentes", { status: 400 });
	}

	try {
		const warehouseProduct = await prisma.warehouseProduct.findUnique({
			where: {
				warehouseId_productId: {
					productId,
					warehouseId,
				},
			},
		});

		return NextResponse.json(warehouseProduct)
	} catch (error) {
		console.error(error)
		return new NextResponse("Erro ao buscar estoque do produto", { status: 500 })
	}
}
