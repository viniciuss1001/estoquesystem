import { requireSession } from "@/lib/auth";
import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(_: NextRequest,  { params }: { params: Promise<{ id: string }> }) {

	try {
		const { session, error: sessionError } = await requireSession()
		if (sessionError) return sessionError

		const {id} = await params

		const productsInWarehouse = await prisma.warehouseProduct.findMany({
			where: {warehouseId: id},
			include: {
				product: {
					include: {
						supplier: true
					}
				}
			}
		})

		return NextResponse.json(productsInWarehouse)

	} catch (error) {
		console.error(error)
		return new NextResponse("Erro ao buscar produtos do armazém", { status: 500 })
	}
}