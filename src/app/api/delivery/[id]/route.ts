import { logAction } from "@/lib/audit";
import { authOptions } from "@/lib/authOptions";
import prisma from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

export async function GET(_: NextRequest, { params }: { params: Promise<{ id: string }> }) {

	const { id } = await params

	try {
		const delivery = await prisma.delivery.findUnique({
			where: { id },
			include: {
				product: true,
				supplier: true,
				supplierInvoice: true,
				warehouse: true
			}
		})

		if (!delivery) {
			return NextResponse.json({ error: "Entrega não encontrada." })
		}

		return NextResponse.json({ delivery })

	} catch (error) {
		console.error(error)
		return NextResponse.json({ error: "Erro ao buscar entrega" }, { status: 500 })
	}

}

export async function PATCH(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {

	const { id } = await params
	const session = await getServerSession(authOptions)

	if (!session || session.user.office !== "ADMIN") {
		return new Response("Unauthorized", { status: 401 });
	}

	try {
		const body = await req.json()
		const { quantity, expectedAt, status, productId, supplierId } = body

		const existingDelivery = await prisma.delivery.findUnique({
			where: { id },
			include: {
				product: true,
				supplierInvoice: true,
				supplier: true,
				warehouse: true
			}
		})

		const updatedDelivery = await prisma.delivery.update({
			where: { id },
			data: {
				quantity,
				expectedAt: new Date(expectedAt),
				status,
				product: productId ? { connect: { id: productId } } : undefined,
				supplier: supplierId ? { connect: { id: supplierId } } : undefined,
				warehouse: body.warehouseId ? { connect: { id: body.warehouseId } } : undefined,
				supplierInvoice: body.supplierInvoiceId ? { connect: { id: body.supplierInvoiceId }, } : undefined
			},
		})

		// stock adjust
		const wasCompleted = existingDelivery?.status === "COMPLETED"
		const isNowCompleted = status === "COMPLETED"

		// verify if product is the same
		const sameProduct = existingDelivery?.productId === productId

		if (productId && quantity && sameProduct && body.warehouseId) {
			// other -> completed => increment global e no armazém
			if (!wasCompleted && isNowCompleted) {
				await prisma.product.update({
					where: { id: productId },
					data: { quantity: { increment: quantity } },
				})

				await prisma.warehouseProduct.upsert({
					where: {
						warehouseId_productId: {
							warehouseId: body.warehouseId,
							productId,
						},
					},
					create: {
						warehouseId: body.warehouseId,
						productId,
						quantity,
					},
					update: {
						quantity: { increment: quantity },
					},
				})
			}

			// completed -> other => decrement global e no armazém
			if (wasCompleted && !isNowCompleted) {
				await prisma.product.update({
					where: { id: productId },
					data: { quantity: { decrement: quantity } },
				})

				await prisma.warehouseProduct.update({
					where: {
						warehouseId_productId: {
							warehouseId: body.warehouseId,
							productId,
						},
					},
					data: {
						quantity: { decrement: quantity },
					},
				})
			}
		}


		await logAction({
			userId: session.user.id,
			action: "update",
			entity: "delivery",
			entityId: updatedDelivery.id,
			description: `Entrega alterada para o produto ${body.productId} com quantidade ${body.quantity}`
		})

		return NextResponse.json(updatedDelivery)

	} catch (error) {
		console.error(error)
		return NextResponse.json({ error: "Erro ao atualizar entrega" }, { status: 500 })
	}


}

export async function DELETE(_: NextRequest, { params }: { params: Promise<{ id: string }> }) {
	const { id } = await params
	const session = await getServerSession(authOptions)

	if (!session || session.user.office !== "ADMIN") {
		return new Response("Unauthorized", { status: 401 })
	}

	try {
		await prisma.delivery.delete({
			where: { id }
		})

		await logAction({
			userId: session.user.id,
			action: "delete",
			entity: "delivery",
			entityId: id,
			description: `Entrega excluida`
		})

		return NextResponse.json({ message: "Entrega excluída com sucesso!" })

	} catch (error) {
		console.log(error)
		return NextResponse.json({ error: "Erro ao deletar entrega" })
	}
}