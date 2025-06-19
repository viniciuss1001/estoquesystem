import { authOptions } from "@/lib/authOptions";
import prisma from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

export async function GET(_: NextRequest,  { params }: { params: Promise<{ id: string }> }) {
	try {
		const session = await getServerSession(authOptions);

		if (!session || session.user.office !== "ADMIN") {
			return new Response("Unauthorized", { status: 401 })
		}

		const {id} = await params

		const warehouse = await prisma.wareHouse.findUnique({
			where: { id: id },
			include: {
				warehouseProduct: {
					include: {
						product: true
					}
				},
				stockMovementsOrigin: {
					include: {
						product: true
					}
				},
				stockMovementsDestination: {
					include: {
						product: true
					}
				},
			}
		})

		if (!warehouse) {
			return new NextResponse("Armazém não encontrado", { status: 404 })
		}

		//unify movementes

		const unifiedMovementes = [
			...warehouse.stockMovementsOrigin.map((m) => ({
				id: m.id,
				productName: m.product.name,
				
			}))
		]

		return NextResponse.json(warehouse)

	} catch (error) {
		console.error(error)
		return new NextResponse("Erro ao buscar armazém", { status: 500 })
	}
}

export async function PATCH(req: NextRequest,  { params }: { params: Promise<{ id: string }> }) {
	try {
		const session = await getServerSession(authOptions);

		if (!session || session.user.office !== "ADMIN") {
			return new Response("Unauthorized", { status: 401 })
		}

		const body = await req.json()

		const {id} = await params

		const { name, description, location } = body

		const updatedWarehouse = await prisma.wareHouse.update({
			where: { id: id },
			data: {
				name,
				location,
				description
			}
		})

		return NextResponse.json(updatedWarehouse)

	} catch (error) {
		console.log(error)
		return NextResponse.json("Erro ao atualizar armazém", { status: 500 })
	}
}

export async function DELETE(_: NextRequest,  { params }: { params: Promise<{ id: string }> }) {
	try {

		const {id} = await params

		// verify if warehouse has products
		const related = await prisma.warehouseProduct.findFirst({
			where: { warehouseId: id }
		})

		if (related) {
			return new NextResponse("Não é possível excluir um armazém com estoque vinculado", { status: 400 })
		}

		await prisma.wareHouse.delete({
			where: { id: id },
		})

		return NextResponse.json({ message: "Armazém excluído com sucesso" })

	} catch (error) {
		console.error(error)
		return new NextResponse("Erro ao excluir armazém", { status: 500 })
	}
}