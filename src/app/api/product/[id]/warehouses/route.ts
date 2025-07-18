import { requireSession } from "@/lib/auth";
import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(_: NextRequest, { params }: { params: Promise<{ id: string }> }) {

	try {

		const { session, error: sessionError } = await requireSession()
		if (sessionError) return sessionError

		const companyId = session.user.companyId

		if (!companyId) {
			return NextResponse.json({ error: "Usuário sem empresa associada." }, { status: 400 })
		}

		const { id } = await params

		const warehousesStock = await prisma.warehouseProduct.findMany({
			where: {
				productId: id,
				
			},
			include: {
				warehouse: true
			}
		})

		return NextResponse.json(warehousesStock)

	} catch (error) {
		console.error("Erro ao buscar estoques por armazém:", error)
		return new NextResponse("Erro interno do servidor", { status: 500 })
	}

}