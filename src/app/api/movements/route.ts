import { logAction } from "@/lib/audit";
import { authOptions } from "@/lib/authOptions";
import prisma from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
	try {
		const session = await getServerSession(authOptions)

		if (!session) {
			return new NextResponse("Não autorizado", { status: 401 })
		}

		const body = await req.json()

		const { productId, type, quantity, originWarehouseId, destinationWarehouseId, notes,
			status = "PENDING"
		} = body

		if (!productId || !type || !quantity || quantity <= 0) {
			return new NextResponse("Dados inválidos", { status: 400 })
		}

		let movement = await prisma.stockMovement.create({
			data: {
				productId,
				type,
				quantity,
				originWarehouseId,
				destinationWarehouseId,
				notes,
				status,
			}
		})

		// LOGIC
		if (type === "IN" && status === "COMPLETED") {
			await prisma.product.update({
				where: { id: productId },
				data: {
					quantity: {
						increment: quantity
					}
				}
			})
		}

		if (type === "OUT" && status === "COMPLETED") {
			await prisma.product.update({
				where: { id: productId },
				data: {
					quantity: { decrement: quantity }
				}
			})
		}

		if (type === "TRANSFER" && status === "COMPLETED") {
			await prisma.product.update({
				where: { id: productId },
				data: {
					quantity: { decrement: quantity }
				}
			})
		}

		await logAction({
			userId: session?.user.id,
			action: "create",
			entity: "movement",
			entityId: movement.id,
			description: `Movimentação criada: ${type} de ${quantity} unidades`,
		})

		return NextResponse.json({ message: "Movimentação registrada com sucesso", movement })


	} catch (error) {
		console.error("Erro ao registrar movimentação:", error)
		return new NextResponse("Erro interno do servidor", { status: 500 })
	}
}
export async function GET() {
	const session = await getServerSession(authOptions)

	if (!session) {
		return new NextResponse("Não autorizado", { status: 401 });
	}

	try {

		const movements = await prisma.stockMovement.findMany({
			orderBy: { createdAt: "desc" },
			include: {
				product: true
			}
		})

		return NextResponse.json({ movements })

	} catch (error) {
		console.error("Erro ao buscar movimentações.", error);
		return new NextResponse("Erro interno do servidor", { status: 500 });
	}
}