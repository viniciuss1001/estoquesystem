import { comparePasswords } from "@/lib/auth";
import prisma from "@/lib/prisma";
import jwt from "jsonwebtoken";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
	const { email, password } = await req.json()

	const user = await prisma.user.findUnique({
		where: { email }
	})

	if (!user || !(await comparePasswords(password, user.password))) {
		return NextResponse.json({ error: "Email ou senha inválida." }, { status: 401 })
	}

	await prisma.user.update({
		where: {
			id: user.id
		}, 
		data: {
			lastLogin: new Date()
		}
	})

	const token = jwt.sign(
		{
			id: user.id,
			name: user.name,
			email: user.email,
			office: user.office
		},
		process.env.JWT_SECRET!,
		{ expiresIn: "1d" }
	)
	return NextResponse.json({ token }, { status: 200 })
}