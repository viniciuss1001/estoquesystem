// src/app/api/password/reset/route.ts
import prisma from "@/lib/prisma"
import bcrypt from "bcryptjs"
import { NextResponse } from "next/server"
import { z } from "zod"

const schema = z.object({
  password: z.string().min(6),
  token: z.string().uuid(),
})

export async function POST(req: Request) {
  const body = await req.json()

  const { password, token } = schema.parse(body)

  const tokenRecord = await prisma.passwordResetToken.findUnique({
    where: { token }
  })

  if (!tokenRecord || tokenRecord.expiresAt < new Date()) {
    return NextResponse.json({ error: "Token inválido ou expirado" }, { status: 400 })
  }

  const hashed = await bcrypt.hash(password, 10)

  await prisma.user.update({
    where: { id: tokenRecord.userId },
    data: { password: hashed },
  })

  await prisma.passwordResetToken.delete({
    where: { token }
  })

  return NextResponse.json({ message: "Senha redefinida com sucesso!" }, { status: 200 })
}
