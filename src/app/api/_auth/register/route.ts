import { hashPassword } from "@/lib/auth"
import prisma from "@/lib/prisma"
import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, email, password, office, phone, department, description, companyId } = body

    if (!email || !password || !companyId) {
      return NextResponse.json(
        { error: "Email, senha e empresa são obrigatórios." },
        { status: 400 }
      )
    }

    const existingUser = await prisma.user.findUnique({ where: { email } })
    if (existingUser) {
      return NextResponse.json({ error: "Usuário já existe." }, { status: 400 })
    }

    const company = await prisma.company.findUnique({ where: { id: companyId } })
    if (!company) {
      return NextResponse.json({ error: "Empresa não encontrada." }, { status: 404 })
    }

    const hashedPassword = await hashPassword(password)

    await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        office: office === "ADMIN" ? "ADMIN" : "GESTOR",
        phone,
        department,
        description,
        companyId, 
      },
    })

    return NextResponse.json({ message: "Usuário criado com sucesso!" }, { status: 201 })
  } catch (error) {
    console.error("Erro ao registrar usuário:", error)
    return NextResponse.json(
      { error: "Erro ao registrar usuário. Tente novamente mais tarde." },
      { status: 500 }
    )
  }
}
