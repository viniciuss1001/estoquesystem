import { requireSession } from "@/lib/auth";
import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
	const {error: sessionError} = await requireSession()
	if(sessionError) return sessionError

	const lateDeliveries = await prisma.delivery.findMany({
		where: {
			expectedAt: {
				lt: new Date()
			}, 
			status: "PENDING"
		}, 
		include: {
			product: true, 
			supplier: true
		}
	})

	return NextResponse.json(lateDeliveries)
}