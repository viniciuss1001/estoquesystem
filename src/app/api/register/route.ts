import { NextRequest, NextResponse } from "next/server"
import prisma from "@/lib/prisma"
import { hashPassword } from "@/lib/auth"
import { logAction } from "@/lib/audit"

export async function POST(req: NextRequest) {
  const body = await req.json()
  const { name, email, password, office, phone, department, description } = body

  if (!email || !password) {
    return NextResponse.json({ erro: "Email e senha são obrigatórios." }, { status: 400 })
  }

  const exists = await prisma.user.findUnique({ where: { email } })
  if (exists) {
    return NextResponse.json({ erro: "Usuário já existe." }, { status: 400 })
  }

  const senhaHash = await hashPassword(password)

  await prisma.user.create({
    data: {
      name,
      email,
      password: senhaHash,
      office: office === "ADMIN" ? "ADMIN" : "GESTOR",
      phone, 
      department, 
      description
    },
  })


  return NextResponse.json({ mensagem: "Usuário criado com sucesso!" }, { status: 201 })
}
