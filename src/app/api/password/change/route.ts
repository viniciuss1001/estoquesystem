import { requireSession } from "@/lib/auth";
import prisma from "@/lib/prisma";
import { compare, hash } from "bcryptjs";

import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const schema = z.object({
	currentPassword: z.string(),
	newPassword: z.string()
})

export async function POST(req: NextRequest) {
	const { session, error: authError } = await requireSession()

	if (authError) return authError

	const body = await req.json()
	const { currentPassword, newPassword } = schema.parse(body)

	const user = await prisma.user.findUnique({
		where: {
			email: session.user.email as string
		}
	})

	if (!user?.password) {
		return NextResponse.json({ error: "Senha atual não definida" }, { status: 400 })
	}

	const passwordValid = await compare(currentPassword, user.password)

	if (!passwordValid) {
		return NextResponse.json({ error: "Senha atual incorreta" }, { status: 400 })
	}

	const hashed = await hash(newPassword, 10)

	await prisma.user.update({
		where: {
			email: user.email
		},
		data: {
			password: hashed
		}
	})

	return NextResponse.json({ message: "Senha alterada com sucesso!" })

}