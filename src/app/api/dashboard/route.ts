import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";
import prisma from "@/lib/prisma";

export async function GET() {
	const session = await getServerSession(authOptions)

	if (!session) {
		return new NextResponse("Unauthorized", { status: 401 })
	}
	const [totalProducts, totalMovements, lowStockCount, upcomingDeliveries] = await Promise.all([
		prisma.product.count(),
		prisma.stockMovement.count({
			where: {
				createdAt: {
					gte: new Date(new Date().setHours(0, 0, 0, 0)), // movimentações de hoje
				},
			},
		}),
		prisma.product.count({
			where: {
				quantity: {
					lte: 5,
				},
			},
		}),
		prisma.supplier.count({
			where: {
				deliveryTime: {
					gte: new Date(),
				},
			},
		}),
	])

	return NextResponse.json({
		totalProducts,
		totalMovements,
		lowStockCount,
		upcomingDeliveries,
	})
}