import { requireSession } from "@/lib/auth";
import { notifyByUserRole } from "@/lib/notifications";
import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
	try {
		const { session, error: sessionError } = await requireSession()
		if (sessionError) return sessionError

		const companyId = session.user.companyId

		if (!companyId) {
			return NextResponse.json({ error: "Usuário sem empresa associada." }, { status: 400 })
		}

		const body = await req.json()

		const { name } = body

		const newTypeService = await prisma.serviceType.create({
			data: {
				name,
				companyId
			}
		})

		await notifyByUserRole({
			title: "Novo tipo de serviço criado",
			message: `Tipo "${newTypeService.name}" adicionado.`,
			roles: ["GESTOR"]
		})

		await notifyByUserRole({
			title: "Tipo de serviço criado por gestor",
			message: `${session.user.name} criou o tipo "${newTypeService.name}".`,
			roles: ["ADMIN"]
		})

		return NextResponse.json(newTypeService)


	} catch (error) {
		console.error(error)
		return NextResponse.json({ error: "Erro ao criar tipo de serviço." }, { status: 500 })
	}
}

export async function GET() {
	try {
		const { session, error: sessionError } = await requireSession()
		if (sessionError) return sessionError

		const companyId = session.user.companyId

		if (!companyId) {
			return NextResponse.json({ error: "Usuário sem empresa associada." }, { status: 400 })
		}

		const types = await prisma.serviceType.findMany({
			where: {
				companyId
			},
			orderBy: { name: "asc" }
		})

		return NextResponse.json(types)
	} catch (error) {
		console.error(error)
		return NextResponse.json({ error: "Erro ao buscar tipos de serviço." }, { status: 500 })
	}
}