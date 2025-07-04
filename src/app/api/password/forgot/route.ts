import prisma from "@/lib/prisma";
import { randomUUID } from "crypto";
import { NextApiRequest, NextApiResponse } from "next";
import { z } from "zod";

const schema = z.object({
	email: z.string().email()
})

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	if(req.method !== "POST") return res.status(405).end()

	const {email} = schema.parse(req.body)

	const user = await prisma.user.findUnique({
		where: {
			email
		}
	})

	if(!user){
		 return res.status(200).json({message: "Se o email existir, enviaremos um link."})
	}

	const token = randomUUID()
	const expires = new Date(Date.now() + 15 *60 *1000) //15min

	await prisma.passwordResetToken.upsert({
		where: {
			userId: user.id
		}, 
		update:{
			token, expiresAt: expires
		},
		create: {
			token, 
			userId: user.id, 
			expiresAt: expires
		}
	})

	const resetUrl = `${process.env.NEXT_PUBLIC_APP_URL}/reset-password?token=${token}`

	console.log("reset link:", resetUrl)

	return res.status(200).json({message: "Link Enviado"})
}