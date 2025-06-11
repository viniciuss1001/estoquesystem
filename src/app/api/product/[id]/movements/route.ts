import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(_: NextRequest, { params }: { params: { id: string } }) {

	try {
		const productMovements = await prisma.stockMovement.findMany({
			where: { productId: params.id },
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