import { requireSession } from "@/lib/auth";
import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
	const { error: sessionError } = await requireSession()
	if (sessionError) return sessionError

	const count = await prisma.product.count()
	return NextResponse.json({ count })
}