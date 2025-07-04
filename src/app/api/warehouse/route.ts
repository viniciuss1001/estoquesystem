import { logAction } from "@/lib/audit";
import { authOptions } from "@/lib/authOptions";
import prisma from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
	try {
		const session = await getServerSession(authOptions);

		if (!session || session.user.office !== "ADMIN") {
			return new Response("Unauthorized", { status: 401 })
		}

		const body = await req.json()
		const { name, description, location } = body

		if (!name) {
			return new NextResponse("Nome é obrigatório", { status: 400 })
		}

		const warehouse = await prisma.wareHouse.create({
			data: {
				name, description, location
			}
		})

		await logAction({
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

		const { searchParams, } = new URL(req.url)

		const location = searchParams.get("location") || undefined

		const warehouses = await prisma.wareHouse.findMany({
			where: {
				location: location ? { contains: location, mode: "insensitive" } : undefined
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