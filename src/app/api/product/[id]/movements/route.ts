import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(_: NextRequest, { params }: { params: Promise<{ id: string }> }) {

	try {
		const { id } = await params

		const productMovements = await prisma.stockMovement.findMany({
			where: { productId: id },
			orderBy: { createdAt: "desc" },
			include: {
				originWareHouse: true,
				destinationWarehouse: true
			}
		})

		return NextResponse.json(productMovements)


	} catch (error) {
		console.error(error)
		return NextResponse.json({ error: "Erro ao buscar movimentações" }, { status: 500 })
	}

}