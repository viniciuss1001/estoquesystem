import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken"
import prisma from "@/lib/prisma";

export async function PATCH(req: NextRequest, { params }: { params: { id: string } }) {
	try {
		const token = req.headers.get("authorization")?.replace("Bearer ", "")

		if (!token) return NextResponse.json({ error: "Não autorizado." }, { status: 401 })

		const decoded = jwt.verify(token, process.env.JWT_SECRET!)
		if (typeof decoded !== "object") {
			return NextResponse.json({ error: 'Token Inválido' }, { status: 401 })
		}

		const userIdFromToken = (decoded as any).id
		const userIdToUpdate = params.id

		//admins only
		if (userIdFromToken !== userIdToUpdate && (decoded as any).office !== "ADMIN") {
			return NextResponse.json({ error: "Acesso Negado." }, { status: 403 })
		}

		const body = await req.json()

		const { name, email, password, office } = body

		//if change password
		let passwordHash

		if (password) {
			const { hashPassword } = await import("@/lib/auth")

			passwordHash = await hashPassword(password)
		}

		const dataToUpdate: any = {
			name, 
			email, 
			...(passwordHash && {password: passwordHash})
		}

		//only admin to change office
		if((decoded as any).office === "ADMIN" && office){
			dataToUpdate.office = office.toUppercase() === "ADMIN" ? "ADMIN" : "GESTOR"
		}

		const updatedUser = await prisma.user.update({
			where: {id: userIdToUpdate},
			data: dataToUpdate
		})

		return NextResponse.json({ user: updatedUser})


	} catch (error) {
		console.log(error)
		return NextResponse.json({ error: "Erro ao atualizar usuário" }, { status: 500 })
	}
}

export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
	try {
		
		const token = req.headers.get("authorization")?.replace("Bearer ", "")
    if (!token) return NextResponse.json({ error: "Não autorizado" }, { status: 401 })

    const decoded = jwt.verify(token, process.env.JWT_SECRET!)
    if (typeof decoded !== "object") return NextResponse.json({ error: "Token inválido" }, { status: 401 })

    const userIdFromToken = (decoded as any).id
    const userIdToDelete = params.id

    // Apenas admin pode deletar (melhor prática)
    if ((decoded as any).office !== "ADMIN") {
      return NextResponse.json({ error: "Acesso negado" }, { status: 403 })
    }

    await prisma.user.delete({ where: { id: userIdToDelete } })

    return NextResponse.json({ mensagem: "Usuário deletado com sucesso" })

	} catch (error) {
		console.log(error)
		return NextResponse.json({ error: "Erro ao deletar usuário" }, { status: 500 })
	}
}