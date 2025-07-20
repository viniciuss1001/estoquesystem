import { requireSession } from "@/lib/auth";
import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
	const { session, error: sessionError } = await requireSession()
	if (sessionError) return sessionError

	const companyId = session.user.companyId

	if (!companyId) {
		return NextResponse.json({ error: "Usuário sem empresa associada." }, { status: 400 })
	}

	const movements = await prisma.stockMovement.findMany({
		where: {
			companyId
		},
		orderBy: {
			createdAt: "asc"
		},
		take: 5,
		include: {
			product: true,
			originWareHouse: true,
			destinationWarehouse: true,
		}
	})

	return NextResponse.json(movements)
}