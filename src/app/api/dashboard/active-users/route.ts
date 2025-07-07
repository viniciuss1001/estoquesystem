import { requireSession } from "@/lib/auth";
import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
	const { error: sessionError } = await requireSession()
	if (sessionError) return sessionError

	const oneWeekAgo = new Date()
	oneWeekAgo.setDate(oneWeekAgo.getDate() - 7)

	const users = await prisma.user.findMany({
		where: {
			lastLogin: {
				gte: oneWeekAgo,
			},
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