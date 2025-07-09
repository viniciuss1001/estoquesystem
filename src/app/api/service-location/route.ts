import { requireSession } from "@/lib/auth";
import { notifyByUserRole } from "@/lib/notifications";
import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
	try {
		const { session, error: sessionError } = await requireSession()
		if (sessionError) return sessionError

		const body = await req.json()

		const { name, address } = body

		const newLocationService = await prisma.serviceLocation.create({
			data: {
				name, 
				address
			}
		})

		await notifyByUserRole({
			title: "Novo local de serviço criado",
			message: `Local "${newLocationService.name}" adicionado.`,
			roles: ["GESTOR"]
		})

		await notifyByUserRole({
			title: "Local de serviço criado por gestor",
			message: `${session.user.name} criou o local "${newLocationService.name}".`,
			roles: ["ADMIN"]
		})

		return NextResponse.json(newLocationService)


	} catch (error) {
		console.error(error)
		return NextResponse.json({ error: "Erro ao criar local de serviço." }, { status: 500 })
	}
}

export async function GET() {
	try {
		const { session, error: sessionError } = await requireSession()
		if (sessionError) return sessionError

		const locales = await prisma.serviceLocation.findMany({
			orderBy: { name: "asc" }
		})

		return NextResponse.json(locales)
	} catch (error) {
		console.error(error)
		return NextResponse.json({ error: "Erro ao buscar tipos de serviço." }, { status: 500 })
	}
}