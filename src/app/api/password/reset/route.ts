import prisma from "@/lib/prisma";
import bcrypt from "bcryptjs";
import { NextApiRequest, NextApiResponse } from "next";
import { z } from "zod";

const schema = z.object({
	password: z.string().min(6),
	token: z.string().uuid()
})

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	if(req.method !== "POST") return res.status(405).end()

	const {password, token} = schema.parse(req.body)

	const tokenRecord = await prisma.passwordResetToken.findUnique({
		where: {
			token
		}
	})

	if(!tokenRecord || tokenRecord.expiresAt < new Date()){
		return res.status(400).json({error: "Token inválido ou expirado"})
	}

	const hashed = await bcrypt.hash(password, 10)

	await prisma.user.update({
		where: {
			id: tokenRecord.userId
		}, 
		data: {
			password: hashed
		}
	})
	
	await prisma.passwordResetToken.delete({
		where: {
			token
		}
	})

	return res.status(200).json({message: "Senha redefinida com sucesso!"})

}