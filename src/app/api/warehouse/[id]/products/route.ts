import { authOptions } from "@/lib/authOptions";
import prisma from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

export async function GET(_: NextRequest, { params }: { params: { id: string } }) {

	try {

		const session = await getServerSession(authOptions)

		if (!session) {
			return new NextResponse("Não autorizado", { status: 401 })
		}

		const productsInWarehouse = await prisma.warehouseProduct.findMany({
			where: {warehouseId: params.id},
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