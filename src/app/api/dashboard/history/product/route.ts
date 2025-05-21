import prisma from "@/lib/prisma"
import { startOfMonth, endOfMonth, subMonths } from "date-fns"
import { NextResponse } from "next/server"

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
        const count = await prisma.product.count({
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
    return NextResponse.json({ error: "Erro ao carregar histórico de produtos" }, { status: 500 })
  }
}