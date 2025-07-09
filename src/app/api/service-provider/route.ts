import { requireSession } from "@/lib/auth";
import { notifyByUserRole } from "@/lib/notifications";
import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
	try {
		const { session, error: sessionError } = await requireSession()
		if (sessionError) return sessionError

		const body = await req.json()

		const { name, email, phone, cnpj, description } = body

		const newProvider = await prisma.serviceProvider.create({
			data: {
				name, email, phone, cnpj, description
			}
		})

		await notifyByUserRole({
			title: "Novo prestador de serviço criado",
			message: `Provedor ${newProvider.name} criado.`,
			roles: ["GESTOR"]
		})

		await notifyByUserRole({
			title: "Prestador de serviço criado por gestor",
			message: `${session.user.name} criou um prestador de serviço.`,
			roles: ["ADMIN"]
		})

		return NextResponse.json(newProvider)


	} catch (error) {
		console.error(error)
		return NextResponse.json({ error: "Erro ao criar provedor de serviço" }, { status: 500 })
	}
}

export async function GET() {
	try {
		const { session, error: sessionError } = await requireSession()
		if (sessionError) return sessionError

		const providers = await prisma.serviceProvider.findMany({
			orderBy: { name: "asc" }
		})

		return NextResponse.json(providers)


	} catch (error) {
		console.log(error)
		return NextResponse.json({ error: "Erro ao buscar prestadores de serviço" }, { status: 500 })
	}
}