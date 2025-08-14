
import { requireSession } from "@/lib/auth"
import prisma from "@/lib/prisma"
import { NextRequest, NextResponse } from "next/server"

export async function GET(req: Request) {
	try {
		const {  error: sessionError } = await requireSession()
		if (sessionError) return sessionError

		const { searchParams } = new URL(req.url)
		const productId = searchParams.get("productId")
		const warehouseId = searchParams.get("warehouseId")

		if (!productId || !warehouseId) {
			return new NextResponse("Parâmetros obrigatórios ausentes", { status: 400 });
		}

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

export async function PATCH(req: NextRequest) {

	const {  error: sessionError } = await requireSession()
	if (sessionError) return sessionError
	const { warehouseId, productId, quantity } = await req.json();

	if (!warehouseId || !productId || quantity == null) {
		return new NextResponse("Dados inválidos", { status: 400 });
	}

	const updated = await prisma.warehouseProduct.update({
		where: {
			warehouseId_productId: {
				warehouseId,
				productId,
			},
		},
		data: { quantity },
	});

	return NextResponse.json(updated);
}
