import { requireSession } from "@/lib/auth";
import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
	const { session, error: sesionError } = await requireSession()

	if (sesionError) return sesionError

	const notifications = await prisma.notification.findMany({
		where: {
			userId: session.user.id
		},
		orderBy: {
			createdAt: "desc"
		},
		take: 50
	})

	return NextResponse.json(notifications)

}