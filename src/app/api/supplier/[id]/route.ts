import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(_: NextRequest, { params }: { params: { id: string } }) {
	try {

		const supplier = await prisma.supplier.findUnique({
			where: { id: params.id },
			include: { products: true }
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

		const updatedSupplier = await prisma.supplier.update({
			where: { id: params.id },
			data: {
				name, email, contactPhone, deliveryTime, description
			}
		})

		return NextResponse.json(updatedSupplier)

	} catch (error) {
		return NextResponse.json({ error: "Erro ao atualizar fornecedor." }, { status: 500 })
	}
}

export async function DELETE(_: Request, { params }: { params: { id: string } }) {

	try {
		await prisma.supplier.delete({
			where: { id: params.id },

		})
		return NextResponse.json({ message: "Fornecedor deletado com sucesso." });

	} catch (error) {
		return NextResponse.json({ error: "Erro ao deletar fornecedor." }, { status: 500 })
	}
}