import { requireSession } from "@/lib/auth"
import prisma from "@/lib/prisma"
import { NextResponse } from "next/server"

export async function GET() {
	try {

		const { session, error: sessionError } = await requireSession()
		if (sessionError) return sessionError

		const companyId = session.user.companyId

		if (!companyId) {
			return NextResponse.json({ error: "Usuário sem empresa associada." }, { status: 400 })
		}

		const products = await prisma.product.findMany({
			where: {
				minimumStock: {
					gt: 0
				}, 
				companyId
			},
			select: {
				id: true,
				name: true,
				quantity: true,
				minimumStock: true
			}
		})

		const lowStockProducts = products.filter((product) => {
			const minStock = product.minimumStock ?? 0
			return product.quantity <= minStock
		})

		return NextResponse.json(lowStockProducts)


	} catch (error) {
		console.log(error)
		return NextResponse.json({ error: "Erro ao buscar produtos com estoque baixo." }, { status: 500 })
	}
}