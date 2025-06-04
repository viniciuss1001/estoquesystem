import { authOptions } from "@/lib/authOptions";
import prisma from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";




export async function PATCH(req: NextRequest) {
	try {

		const session = await getServerSession(authOptions)

		if (!session || session.user.office !== "ADMIN") {
			return new Response("Unauthorized", { status: 401 })
		}

		const { searchParams } = new URL(req.url)
		const warehouseId = searchParams.get("warehouseId")
		const productId = searchParams.get("productId")

		if (!warehouseId || !productId) {
			return new Response("Parâmetros inválidos", { status: 400 })
		}

		const body = await req.json()

		const { quantity } = body

		const warehouseProductUpdated = await prisma.warehouseProduct.update({
			where: {
				warehouseId_productId: {
					warehouseId, productId
				}
			},
			data: {
				quantity
			}
		})

		return NextResponse.json(warehouseProductUpdated)

	} catch (error) {
		console.error(error)
		return new Response("Erro ao atualizar", { status: 500 })
	}
}

export async function DELETE(req: NextRequest) {
	try {
		const session = await getServerSession(authOptions);
		const { searchParams } = new URL(req.url);
		const warehouseId = searchParams.get("warehouseId");
		const productId = searchParams.get("productId");

		if (!session || session.user.office !== "ADMIN") {
			return new Response("Unauthorized", { status: 401 });
		}

		if (!warehouseId || !productId) {
			return new Response("Parâmetros inválidos", { status: 400 });
		}

		await prisma.warehouseProduct.delete({
			where: {
				warehouseId_productId: {
					warehouseId,
					productId
				}
			}
		})

		return new Response("Relação deletada com sucesso", { status: 200 })

	} catch (error) {
		console.error(error)
		return new Response("Erro ao deletar", { status: 500 })
	}
}