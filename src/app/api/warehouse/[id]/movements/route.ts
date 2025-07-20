import { requireSession } from "@/lib/auth";
import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {

	try {

		const { session, error: sessionError } = await requireSession()
		if (sessionError) return sessionError

		const companyId = session.user.companyId

		if (!companyId) {
			return NextResponse.json({ error: "Usuário sem empresa associada." }, { status: 400 })
		}

		const { id } = await params

		const movements = await prisma.stockMovement.findMany({
			where: {
				OR: [
					{ originWarehouseId: id },
					{ destinationWarehouseId: id }
				],
				companyId
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