import { requireSession } from "@/lib/auth";
import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
	const { session, error: sessionError } = await requireSession()
	if (sessionError) return sessionError

	const { id } = await params

	const notification = await prisma.notification.findUnique({
		where: { id },
	})

	if (!notification || notification.userId !== session.user.id) {
		return new NextResponse("Not found or forbidden", { status: 404 })
	}

	await prisma.notification.delete({
		where: { id },
	})

	return NextResponse.json({ message: "Notification deleted" })

}