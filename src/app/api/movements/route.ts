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

		const { productId, type, quantity, origin, destination, notes } = body

		if (!productId || !type || !quantity || quantity <= 0) {
			return new NextResponse("Dados inválidos", { status: 400 })
		}

		let movement

		if (type === "TRANSFER") {
			if (!origin || !destination) {
				return new NextResponse("Origem e destino são obrigatórios para transferências.", { status: 400 });
			}

			movement = await prisma.stockMovement.create({
				data: {
					productId,
					type,
					quantity,
					origin,
					destination,
					notes,
				},
			});

			// Transferências não alteram o saldo total
		} else {
			movement = await prisma.stockMovement.create({
				data: {
					productId,
					type,
					quantity,
					destination,
					notes,
				},
			});

			await prisma.product.update({
				where: { id: productId },
				data: {
					quantity: {
						[type === "IN" ? "increment" : "decrement"]: quantity,
					},
				},
			});
		}

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
			orderBy: {createdAt: "desc"},
			include: {
				product: true
			}
		})

		return NextResponse.json({movements})

	} catch (error) {
		console.error("Erro ao buscar movimentações.", error);
		return new NextResponse("Erro interno do servidor", { status: 500 });
	}
}