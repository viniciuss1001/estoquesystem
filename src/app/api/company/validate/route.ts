import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
	try {
		const { cnpj } = await req.json()

		if (!cnpj) {
			return NextResponse.json({ error: "CNPJ é obrigatório." }, { status: 400 })
		}

		const company = await prisma.company.findUnique({
			where: { cnpj },
			select: {
				id: true,
				name: true,
				cnpj: true
			}
		})

		if (!company) {
			return NextResponse.json({ error: "Empresa não encontrada." }, { status: 404 })
		}

		return NextResponse.json(company)

	} catch (error) {
		console.error("Erro ao validar CNPJ:", error)
		return NextResponse.json({ error: "Erro interno do servidor." }, { status: 500 })
	}
}