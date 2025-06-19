import { authOptions } from "@/lib/authOptions";
import prisma from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest,  { params }: { params: Promise<{ id: string }> }) {

	try {

		const session = await getServerSession(authOptions)

		if (!session) {
			return new NextResponse("Não autorizado", { status: 401 })
		}

		const {id} = await params

		const movements = await prisma.stockMovement.findMany({
			where: {
				OR: [
					{ originWarehouseId: id },
					{ destinationWarehouseId: id }
				]
			},
			include: {
				product: true, 
				originWareHouse: true, 
				destinationWarehouse: true
			},
			orderBy: {
				createdAt: "desc"
			}
		})

		return NextResponse.json(movements)

	} catch (error) {
		console.error("Erro ao buscar movimentações:", error)
		return new NextResponse("Erro interno do servidor", { status: 500 })
	}

}