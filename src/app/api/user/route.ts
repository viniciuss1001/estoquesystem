import { requireAdmin, requireSession } from "@/lib/auth";
import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
	try {
		const { session, error: sessionError } = await requireSession()
		if (sessionError) return sessionError

		const companyId = session.user.companyId

		if (!companyId) {
			return NextResponse.json({ error: "Usuário sem empresa associada." }, { status: 400 })
		}

		const { searchParams } = new URL(req.url)

		const office = searchParams.get("office") as "ADMIN" | "GESTOR"

		const users = await prisma.user.findMany({
			where: {
				office: office ?  office : "GESTOR", 
				companyId
			},
			orderBy: { createdAt: "desc" }, 
			
		})

		return NextResponse.json(users)

	} catch (error) {
		console.log(error)
		return new NextResponse("Erro ao buscar usuários.", { status: 500 })
	}
}