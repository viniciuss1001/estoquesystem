
import prisma from "@/lib/prisma"
import { randomUUID } from "crypto"
import { NextResponse } from "next/server"
import { z } from "zod"

const schema = z.object({
  email: z.string().email()
})

export async function POST(req: Request) {
  const body = await req.json()

  const { email } = schema.parse(body)

  const user = await prisma.user.findUnique({
    where: { email },
  })

  // Sempre retorna OK, por segurança
  if (!user) {
    return NextResponse.json({ message: "Se o email existir, enviaremos um link." }, { status: 200 })
  }

  const token = randomUUID()
  const expires = new Date(Date.now() + 15 * 60 * 1000)

  await prisma.passwordResetToken.upsert({
    where: { userId: user.id },
    update: { token, expiresAt: expires },
    create: { token, userId: user.id, expiresAt: expires },
  })

  const resetUrl = `${process.env.NEXT_PUBLIC_APP_URL}/reset-password?token=${token}`
  console.log("🔗 Link de redefinição:", resetUrl)

  return NextResponse.json({ message: "Link enviado." }, { status: 200 })
}
