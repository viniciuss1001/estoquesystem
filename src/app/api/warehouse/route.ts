import { logAction } from "@/lib/audit";
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
		const { name, description, location } = body

		if (!name) {
			return new NextResponse("Nome é obrigatório", { status: 400 })
		}

		const warehouse = await prisma.wareHouse.create({
			data: {
				name, description, location, companyId
			}
		})

		await notifyByUserRole({
			title: "Novo armazém adicionado.",
			message: `Novo armazém criado ${warehouse.name}`,
			roles: ["GESTOR"]
		})

		await notifyByUserRole({
			title: "Armazém adicionado por gestor.",
			message: `${session.user.name} criou o armazém ${warehouse.name}`,
			roles: ["ADMIN"]
		})

		await logAction({
			companyId: session.user.companyId!,
			userId: session.user.id,
			action: "create",
			entity: "warehouse",
			entityId: warehouse.id,
			description: `Armazém criado: ${warehouse.name}`
		})

		return NextResponse.json(warehouse)

	} catch (error) {
		console.error(error)
		return new NextResponse("Erro ao criar armazém", { status: 500 })
	}
}

export async function GET(req: NextRequest) {
	try {

		const { session, error: sessionError } = await requireSession()
		if (sessionError) return sessionError

		const companyId = session.user.companyId

		if (!companyId) {
			return NextResponse.json({ error: "Usuário sem empresa associada." }, { status: 400 })
		}

		const { searchParams, } = new URL(req.url)

		const location = searchParams.get("location") || undefined

		const warehouses = await prisma.wareHouse.findMany({
			where: {
				location: location ? { contains: location } : undefined,
				companyId
			},
			orderBy: { createdAt: "desc" },
			select: {
				id: true,
				name: true,
				location: true,
				description: true
			}
		})
		return NextResponse.json(warehouses)


	} catch (error) {
		console.error(error)
		return new NextResponse("Erro ao buscar armazéns", { status: 500 })
	}
}