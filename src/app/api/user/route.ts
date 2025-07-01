import { requireAdmin, requireSession } from "@/lib/auth";
import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
	try {
		const { session, error: sessionError } = await requireSession()
		if (sessionError) return sessionError

		const { error: adminError, ok: adminPermission } = await requireAdmin(session)
		if (adminError) return adminError
		if (adminPermission) return adminPermission

		const { searchParams } = new URL(req.url)

		const office = searchParams.get("office") as "ADMIN" | "GESTOR"

		const users = await prisma.user.findMany({
			where: office ? { office } : undefined,
			orderBy: { createdAt: "desc" }
		})

		return NextResponse.json(users)


	} catch (error) {
		console.log(error)
		return new NextResponse("Erro ao buscar usuários.", { status: 500 })
	}
}