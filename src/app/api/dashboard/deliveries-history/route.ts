import { requireSession } from "@/lib/auth";
import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
	const { session, error: sessionError } = await requireSession()
	if (sessionError) return sessionError

	const companyId = session.user.companyId

	if (!companyId) {
		return NextResponse.json({ error: "Usuário sem empresa associada." }, { status: 400 })
	}

	const { searchParams } = new URL(req.url)
	const days = Number(searchParams.get("days") || 15)

	const startDate = new Date()
	startDate.setDate(startDate.getDate() - days)

	const deliveries = await prisma.delivery.groupBy({
		by: ["expectedAt"],
		_count: {
			id: true,
		},
		where: {
			createdAt: {
				gte: startDate
			},
			companyId
		},
		orderBy: {
			expectedAt: "asc"
		}
	})

	const result = deliveries.map((entry) => ({
		date: entry.expectedAt.toISOString().split("T")[0],
		count: entry._count.id
	}))

	return NextResponse.json(result)
}
