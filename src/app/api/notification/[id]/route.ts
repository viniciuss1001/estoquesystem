import { requireSession } from "@/lib/auth";
import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
	const { session, error: sessionError } = await requireSession()
	if (sessionError) return sessionError

	const { id } = await params

	const deleted = await prisma.notification.delete({
		where: { 
			id, 
			userId: session.user.id
		}
	})

	return NextResponse.json(deleted)
}