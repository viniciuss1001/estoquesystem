import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(_: NextRequest, { params }: { params: Promise<{ id: string }> }) {

	try {
		const { id } = await params

		const warehousesStock = await prisma.warehouseProduct.findMany({
			where: { productId: id },
			include: {
				warehouse: true
			}
		})

		return NextResponse.json(warehousesStock)

	} catch (error) {
		console.error("Erro ao buscar estoques por armazém:", error)
		return new NextResponse("Erro interno do servidor", { status: 500 })
	}

}