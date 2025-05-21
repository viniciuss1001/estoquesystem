import { NextResponse } from "next/server"
import { startOfMonth, endOfMonth, subMonths } from "date-fns"
import prisma from "@/lib/prisma"

export async function GET() {
	try {
		const months = Array.from({ length: 6 }).map((_, i) => {
      const date = subMonths(new Date(), i)
      return {
        label: date.toLocaleDateString("pt-BR", { month: "short", year: "numeric" }),
        start: startOfMonth(date),
        end: endOfMonth(date)
      }
    }).reverse()

    const results = await Promise.all(
      months.map(async ({ label, start, end }) => {
        const count = await prisma.stockMovement.count({
          where: {
            createdAt: {
              gte: start,
              lte: end
            }
          }
        })
        return { label, count }
      })
    )

    return NextResponse.json(results)
	} catch (error) {
		console.error(error)
		return NextResponse.json({ error: "Erro ao carregar histórico de movimentações" }, { status: 500 })
	}
}