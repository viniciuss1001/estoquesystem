import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
	const data = await req.json()

	const { name, email, contactPhone, deliveryTime, description } = data

	try {

		const newSupplier = await prisma.supplier.create({
			data: {
				name, email, contactPhone, deliveryTime, description,
			}
		})

		return NextResponse.json(newSupplier, { status: 201 });

	} catch (error) {
		return NextResponse.json({ error: "Erro ao criar fornecedor." }, { status: 500 });
	}
}

export async function GET() {
	try {
		const suppliers = await prisma.supplier.findMany({
			include: { products: true }
		})

		return NextResponse.json(suppliers)
	} catch (error) {
		return NextResponse.json({ error: "Erro ao buscar fornecedores." })
	}
}