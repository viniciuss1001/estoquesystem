import { requireSession } from "@/lib/auth";
import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function PATCH() {
	const { session, error: sessionError } = await requireSession()

	if (sessionError) return sessionError

	await prisma.notification.updateMany({
		where: {
			userId: session.user.id,
			read: false
		},
		data: {
			read: true
		}
	})

	return new NextResponse("All notifications marked as read", { status: 200 })
}