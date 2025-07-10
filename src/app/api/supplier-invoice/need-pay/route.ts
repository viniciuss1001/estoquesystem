import { requireSession } from "@/lib/auth"
import prisma from "@/lib/prisma"
import { NextResponse } from "next/server"

export async function GET() {
    try {
        const { session, error: sessionError } = await requireSession()
        if (sessionError) return sessionError

        const openInvoices = await prisma.supplierInvoice.findMany({
            where: {
                status: {
                    in: ["PENDING", "OVERDUE"]
                }
            },
            select: {
                id: true,
                title: true,
                dueDate: true,
                supplier: {
                    select: {
                        id: true,
                        name: true
                    }
                },
                amount: true,
                status: true
            },
            orderBy: {
                dueDate: "asc"
            }
        })

        return NextResponse.json(openInvoices)

    } catch (error) {
        console.error("Erro ao buscar boletos em aberto:", error)
        return NextResponse.json({ error: "Erro interno" }, { status: 500 })
    }
}