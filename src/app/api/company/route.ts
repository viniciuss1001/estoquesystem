import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
	try {
		const body = await req.json()

		const { cnpj, name, corporateName } = body


		if (!name || !cnpj) {
			return NextResponse.json(
				{ error: "CNPJ e nome da empresa são obrigatórios." },
				{ status: 400 }
			)
		}

		const companyExists = await prisma.company.findUnique({
			where: { cnpj }
		})

		if (companyExists) {
			return NextResponse.json(
				{ error: "Empresa com este CNPJ já está cadastrada." },
				{ status: 409 }
			)
		}

		const company = await prisma.company.create({
			data: {
				cnpj,
				name,
				corporateName
			}
		})

		return NextResponse.json(company)


	} catch (error) {
		console.error("Erro ao criar empresa:", error)
		return NextResponse.json(
			{ error: "Erro interno ao criar empresa." },
			{ status: 500 }
		)
	}
}