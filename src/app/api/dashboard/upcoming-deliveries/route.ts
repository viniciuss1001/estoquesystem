import { requireSession } from "@/lib/auth";
import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
	const {error: sessionError} = await requireSession()
	if(sessionError) return sessionError

	const deliveries = await prisma.delivery.findMany({
		where: {
			expectedAt: {
				gte: new Date()
			}, 
			status: "PENDING"
		}, 
		orderBy: {
			expectedAt: "asc"
		}, 
		take: 5,
		include: {
			product: true, 
			supplier: true
		}
	})

	return NextResponse.json(deliveries)
}