import { logAction } from "@/lib/audit";
import { requireAdmin, requireSession } from "@/lib/auth";
import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
	try {
		const { session, error: sessionError } = await requireSession()
		if (sessionError) return sessionError

		const { error: adminError } = await requireAdmin(session)
		if (adminError) return adminError

		const body = await req.json()

		const category = await prisma.category.create({
			data: {
				name: body.name
			}
		})
		try {
			await logAction({
				userId: session.user.id,
				action: "create",
				entity: "category",
				entityId: category.id,
				description: `Categoria criada: ${category.name}`
			});
		} catch (logError) {
			console.error("Erro ao registrar log:", logError);
		}


		return NextResponse.json(category, { status: 201 })

	} catch (error) {
		console.error(error)
		return NextResponse.json({ error: "Erro ao criar categoria" }, { status: 500 })
	}

}

export async function GET() {
	try {
		const categories = await prisma.category.findMany({
			orderBy: { name: "desc" }
		})

		return NextResponse.json(categories)

	} catch (error) {
		return NextResponse.json({ error: "Erro ao buscar categorias" }, { status: 500 })
	}
}