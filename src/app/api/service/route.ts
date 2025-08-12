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

		const service = await prisma.service.create({
			data: {
				serviceProviderId: body.serviceProviderId,
				serviceTypeId: body.serviceTypeId,
				serviceLocationId: body.serviceLocationId,
				serviceDate: new Date(body.serviceDate),
				cost: body.cost || 0,
				status: body.status || "PENDING",
				description: body.description,
				attachmentUrl: body.attachmentUrl || null,
				invoiceId: body.invoiceId || null,
				createdByUserId: session.user.id,
				companyId
			},
			include: {
				provider: true,
				type: true,
				location: true
			}
		})

		await notifyByUserRole({
			title: "Novo serviço criado!",
			message: `Novo serviço adicionado (${service.type.name}) para ${service.provider.name}.`,
			roles: ["GESTOR"]
		});

		await notifyByUserRole({
			title: "Novo serviço adicionado por gestor",
			message: `${session.user.name} criou um serviço.`,
			roles: ["ADMIN"]
		});

		await logAction({
			userId: session.user.id,
			action: "create",
			entity: "service",
			entityId: service.id,
			description: `Serviço registrado: ${service.type.name} por ${service.provider.name}`,
		});

		return NextResponse.json(service, { status: 201 })

	} catch (error) {
		console.error(error)
		return NextResponse.json({ error: "Erro ao registrar serviço" }, { status: 500 })
	}
}

export async function GET(req: NextRequest) {
	try {
		const { session, error: sessionError } = await requireSession();
		if (sessionError) return sessionError

		const companyId = session.user.companyId

		if (!companyId) {
			return NextResponse.json({ error: "Usuário sem empresa associada." }, { status: 400 })
		}

		const { searchParams } = new URL(req.url)
		

		const serviceProviderId = searchParams.get("serviceProviderId")
		const serviceTypeId = searchParams.get("serviceTypeId")
		const serviceLocationId = searchParams.get("serviceLocationId")
		const invoiceId = searchParams.get("invoiceId")
		const startDate = searchParams.get("startDate")
		const endDate = searchParams.get("endDate")

		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		const where: any = {
			companyId
		}
		if (serviceProviderId) where.serviceProviderId = serviceProviderId;
		if (serviceTypeId) where.serviceTypeId = serviceTypeId;
		if (serviceLocationId) where.serviceLocationId = serviceLocationId;
		if (invoiceId) where.invoiceId = invoiceId;

		if (startDate || endDate) {
			where.serviceDate = {
				...(startDate && { gte: new Date(startDate) }),
				...(endDate && { lte: new Date(endDate) }),
			}
		}


		const services = await prisma.service.findMany({
			where,
			include: {
				provider: {
					select: {
						id: true,
						name: true
					}
				},
				type: {
					select: {
						id: true,
						name: true
					}
				},
				location: {
					select: {
						id: true,
						name: true
					}
				},
				invoice: {
					select: {
						id: true,
						title: true
					}
				},
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
