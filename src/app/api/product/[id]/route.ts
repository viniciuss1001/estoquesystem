import { logAction } from "@/lib/audit";
import { requireSession } from "@/lib/auth";
import { authOptions } from "@/lib/authOptions";
import prisma from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";


export async function GET(_: NextRequest, { params }: { params: Promise<{ id: string }> }) {

	const { session, error: sessionError } = await requireSession()
	if (sessionError) return sessionError

	const companyId = session.user.companyId

	if (!companyId) {
		return NextResponse.json({ error: "Usuário sem empresa associada." }, { status: 400 })
	}
	const { id } = await params

	try {
		const product = await prisma.product.findUnique({
			where: {
				id,
				companyId
			},
			include: {
				category: true,
				supplier: true,
				warehouseProduct: {
					include: {
						warehouse: true
					}
				}
			}
		})

		if (!product) {
			return NextResponse.json({ error: "Produto não encontrado" }, { status: 404 })
		}

		return NextResponse.json(product)
	} catch (error) {
		console.error("Erro ao buscar produto:", error)
		return NextResponse.json({ error: "Erro interno ao buscar produto" }, { status: 500 })
	}
}


export async function PATCH(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {

	try {

		const { session, error: sessionError } = await requireSession()
		if (sessionError) return sessionError

		const companyId = session.user.companyId

		if (!companyId) {
			return NextResponse.json({ error: "Usuário sem empresa associada." }, { status: 400 })
		}

		const { id } = await params

		const body = await req.json()

		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		const updatedData: any = {
			name: body.name,
			sku: body.sku,
			quantity: Number(body.quantity),
			price: Number(body.price)
		}

		// connect category if updated
		if (body.category) {
			updatedData.category = {
				connect: { id: body.category }
			}
		}

		// connect supplier
		if (body.supplier) {
			updatedData.supplier = {
				connect: { id: body.supplier }
			}
		}

		// connect warehouse
		if (body.warehouse) {
			updatedData.warehouse = {
				connect: { id: body.warehouse }
			}
		}

		if (body.minimumStock !== undefined) {
			updatedData.minimumStock = Number(body.minimumStock)
		}

		const product = await prisma.product.update({
			where: { id, companyId },
			data: updatedData
		})

		await logAction({
			userId: session.user.id,
			action: "update",
			entity: "product",
			entityId: product.id,
			description: `Produto alterado: ${product.name}`
		})


		return NextResponse.json(product)

	} catch (error) {
		console.error(error)
		return NextResponse.json({ error: "Erro ao atualizar produto" }, { status: 500 })
	}
}

export async function DELETE(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
	try {
		const { id } = await params
		const session = await getServerSession(authOptions);

		if (!session || session.user.office !== "ADMIN") {
			return new Response("Unauthorized", { status: 401 });
		}

		await prisma.product.delete({ where: { id } })

		try {
			await logAction({
				userId: session.user.id,
				action: "delete",
				entity: "product",
				entityId: id,
				description: `Produto Deletado: ${id}`
			})
		} catch (error) {
			console.log(error)
			return NextResponse.json({ error: "Erro ao criar o log de deleção do produto." })
		}

		return NextResponse.json({ mensagem: "Produto deletado com sucesso" })
	} catch (error) {
		console.error(error)
		return NextResponse.json({ error: "Erro ao deletar produto" }, { status: 500 })
	}
}