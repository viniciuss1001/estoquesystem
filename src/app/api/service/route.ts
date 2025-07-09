import { logAction } from "@/lib/audit";
import { requireSession } from "@/lib/auth";
import { notifyByUserRole } from "@/lib/notifications";
import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
	try {
		const { session, error: sessionError } = await requireSession()
		if (sessionError) return sessionError

		const body = await req.json()

		const service = await prisma.service.create({
			data: {
				provider: body.providerName,
				type: body.serviceType,
				serviceDate: new Date(body.serviceDate),
				cost: body.cost || 0,
				status: body.status || "PENDING",
				location: body.location,
				description: body.description,
				attachmentUrl: body.attachmentUrl || null,
				invoiceId: body.invoiceId || null,
				createdByUserId: session.user.id,
			}
		})

		await notifyByUserRole({
			title: "Novo serviço criado!",
			message: "Novo serviço adicionado",
			roles: ["GESTOR"]
		})

		await notifyByUserRole({
			title: "Novo serviço adicionado por gestor",
			message: `${session.user.name} criou um serviço para ${service.providerName}.`,
			roles: ["ADMIN"]
		})

		await logAction({
			userId: session.user.id,
			action: "create",
			entity: "service",
			entityId: service.id,
			description: `Serviço registrado: ${service.serviceType} por ${service.providerName}`,
		})

		return NextResponse.json(service, { status: 201 })

	} catch (error) {
		console.error(error)
		return NextResponse.json({ error: "Erro ao registrar serviço" }, { status: 500 })
	}
}

export async function GET(req: NextRequest) {
	try {
		const { error: sessionError } = await requireSession()
		if (sessionError) return sessionError

		const { searchParams } = new URL(req.url)

		const provider = searchParams.get("provider");
		const type = searchParams.get("type")
		const location = searchParams.get("location")
		const invoiceId = searchParams.get("invoiceId")
		const startDate = searchParams.get("startDate")
		const endDate = searchParams.get("endDate")

		const where: any = {}

		if (provider) {
			where.providerName = { contains: provider, mode: "insensitive" };
		}

		if (type) {
			where.serviceType = { contains: type, mode: "insensitive" };
		}

		if (location) {
			where.location = { contains: location, mode: "insensitive" };
		}

		if (invoiceId) {
			where.invoiceId = invoiceId;
		}

		if (startDate || endDate) {
			where.serviceDate = {
				...(startDate && { gte: new Date(startDate) }),
				...(endDate && { lte: new Date(endDate) }),
			};
		}

		const services = await prisma.service.findMany({
			where,
			include: {
				invoice: true,
				createdByUser: {
					select: {
						id: true,
						name: true,
						email: true
					}
				}
			},
			orderBy: {
				serviceDate: "asc"
			}
		})

		return NextResponse.json(services)


	} catch (error) {
		console.error(error)
		return NextResponse.json({ error: "Erro ao buscar serviços" }, { status: 500 })
	}
}