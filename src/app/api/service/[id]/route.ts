import { logAction } from "@/lib/audit";
import { requireSession } from "@/lib/auth";
import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(_: NextRequest, { params }: { params: Promise<{ id: string }> }) {
	try {

		const { session, error: sessionError } = await requireSession()
		if (sessionError) return sessionError

		const { id } = await params

		const service = await prisma.service.findUnique({
			where: { id },
			include: {
				invoice: true,
				createdByUser: {
					select: {
						id: true,
						name: true,
						email: true
					}
				}
			}
		})

		if (!service) {
			return NextResponse.json({ error: "Service not found" }, { status: 404 })
		}

		return NextResponse.json(service)


	} catch (error) {
		console.error("Erro ao buscar serviço:", error);
		return NextResponse.json({ error: "Erro interno ao buscar serviço" }, { status: 500 })
	}
}

export async function PATCH(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
	try {
		const { session, error: sessionError } = await requireSession()
		if (sessionError) return sessionError

		const { id } = await params
		const body = await req.json()

		const updatedData: any = {
			providerName: body.providerName,
			email: body.email,
			phone: body.phone,
			serviceType: body.serviceType,
			serviceDate: new Date(body.serviceDate),
			cost: Number(body.cost),
			status: body.status,
			location: body.location,
			description: body.description,
			attachmentUrl: body.attachmentUrl || null,
			invoiceId: body.invoiceId || null
		}

		const updatedService = await prisma.service.update({
			where: { id },
			data: updatedData
		})

		await logAction({
			userId: session.user.id,
			action: "update",
			entity: "service",
			entityId: id,
			description: `Serviço atualizado: ${updatedService.serviceType} - ${updatedService.providerName}`
		})

		return NextResponse.json(updatedService)

	} catch (error) {
		console.error("Erro ao atualizar serviço:", error)
		return NextResponse.json({ error: "Erro ao atualizar serviço" }, { status: 500 })
	}
}

export async function DELETE(_: NextRequest, { params }: { params: Promise<{ id: string }> }) {
	try {
		const { session } = await requireSession()
		const { id } = await params

		if (!session || session.user.office !== "ADMIN") {
			return new Response("Unauthorized", { status: 401 });
		}

		await prisma.service.delete({
			where: { id }
		})

		await logAction({
			userId: session.user.id,
			action: "delete",
			entity: "service",
			entityId: id,
			description: `Serviço deletado: ${id}`
		})

	} catch (error) {
		console.error("Erro ao deletar serviço:", error)
		return NextResponse.json({ error: "Erro ao deletar serviço" }, { status: 500 })
	}
}