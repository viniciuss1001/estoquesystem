import { logAction } from "@/lib/audit";
import { authOptions } from "@/lib/authOptions";
import prisma from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

export async function GET(_: NextRequest, { params }: { params: { id: string } }) {
	try {
		const session = await getServerSession(authOptions);

		if (!session || session.user.office !== "ADMIN") {
			return new Response("Unauthorized", { status: 401 });
		}

		const supplier = await prisma.supplier.findUnique({
			where: { id: params.id },
			include: {
				products: {
					include: {
						category: true,
						
					}
				}
			}
		})

		if (!supplier) {
			return NextResponse.json({ error: "Fornecedor não encontrado." }, { status: 404 })
		}

		return NextResponse.json(supplier)

	} catch (error) {
		return NextResponse.json({ error: "Erro ao buscar fornecedor." }, { status: 500 });
	}

}

export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
	const data = await req.json()

	const { name, email, contactPhone, deliveryTime, description } = data

	try {
		const session = await getServerSession(authOptions);

		if (!session || session.user.office !== "ADMIN") {
			return new Response("Unauthorized", { status: 401 });
		}

		const updatedSupplier = await prisma.supplier.update({
			where: { id: params.id },
			data: {
				name, email, contactPhone, deliveryTime, description
			}
		})

		await logAction({
			userId: session.user.id,
			action: "update",
			entity: "supplier",
			entityId: updatedSupplier.id,
			description: `Fornecedor alterado: ${updatedSupplier.name}`
		})

		return NextResponse.json(updatedSupplier)

	} catch (error) {
		return NextResponse.json({ error: "Erro ao atualizar fornecedor." }, { status: 500 })
	}
}

export async function DELETE(_: Request, { params }: { params: { id: string } }) {

	try {

		const session = await getServerSession(authOptions);

		if (!session || session.user.office !== "ADMIN") {
			return new Response("Unauthorized", { status: 401 });
		}

		await prisma.supplier.delete({
			where: { id: params.id },

		})

		await logAction({
			userId: session.user.id,
			action: "delete",
			entity: "supplier",
			entityId: params.id,
			description: `Fornecedor excluído: ${params.id}`
		})

		return NextResponse.json({ message: "Fornecedor deletado com sucesso." });

	} catch (error) {
		return NextResponse.json({ error: "Erro ao deletar fornecedor." }, { status: 500 })
	}
}