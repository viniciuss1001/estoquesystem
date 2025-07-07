import { requireSession } from "@/lib/auth";
import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
	const { error: sessionError } = await requireSession()
	if (sessionError) return sessionError

	const { searchParams } = new URL(req.url)
	const days = Number(searchParams.get("days") || 15)

	const startDate = new Date()
	startDate.setDate(startDate.getDate() - days)

	const movements = await prisma.stockMovement.findMany({
		where: {
			createdAt: {
				gte: startDate,
			},
		},
		orderBy: {
			createdAt: "asc",
		},
		select: {
			createdAt: true,
			type: true,
		},
	})

	const grouped: Record<string, { IN: number; OUT: number; TRANSFER: number }> = {}

	for (const movement of movements) {
		const date = movement.createdAt.toISOString().split("T")[0]
		if (!grouped[date]) {
			grouped[date] = { IN: 0, OUT: 0, TRANSFER: 0 }
		}
		grouped[date][movement.type]++
	}

	const result = Object.entries(grouped).map(([date, counts]) => ({
		date,
		...counts,
	}))

	return NextResponse.json(result)
}