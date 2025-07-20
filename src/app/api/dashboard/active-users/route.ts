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

	const oneWeekAgo = new Date()
	oneWeekAgo.setDate(oneWeekAgo.getDate() - 7)

	const users = await prisma.user.findMany({
		where: {
			lastLogin: {
				gte: oneWeekAgo,
			},
			companyId
		},
		select: {
			id: true,
			name: true,
			email: true,
			office: true,
			lastLogin: true,
		},
		orderBy: {
			lastLogin: "desc",
		},
	})

	return NextResponse.json(users)
}