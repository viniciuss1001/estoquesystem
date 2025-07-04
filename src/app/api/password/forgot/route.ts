
import prisma from "@/lib/prisma"
import { resend } from "@/lib/resend"
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

  await resend.emails.send({
    from: "Stockly <onboarding@resend.dev>", // ou domínio verificado
    to: [email],
    subject: "Redefinição de senha",
    html: `
    <p>Você solicitou a redefinição de senha.</p>
    <p>Clique no link abaixo para redefinir sua senha. Este link expira em 15 minutos.</p>
    <a href="${resetUrl}" target="_blank">${resetUrl}</a>
  `
  })

  return NextResponse.json({ message: "Link enviado." }, { status: 200 })
}
