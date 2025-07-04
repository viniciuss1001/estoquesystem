import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken"
import prisma from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
	try {
		const session = await getServerSession(authOptions)

		if (!session?.user) {
			return NextResponse.json({ error: "Acesso não autorizado." }, { status: 401 })
		}

		const userIdFromSession = session.user.id
		const userOffice = session.user.office
		const userIdToFetch = params.id

		// Só permite o próprio usuário ou um admin acessar os dados
		if (userIdFromSession !== userIdToFetch && userOffice !== "ADMIN") {
			return NextResponse.json({ error: "Acesso negado." }, { status: 403 })
		}

		const user = await prisma.user.findUnique({
			where: { id: userIdToFetch },
			select: {
				id: true,
				name: true,
				email: true,
				office: true,
				phone: true,
				department: true,
				description: true,
				image: true,
				createdAt: true,
				updatedAt: true,
			},
		})

		if (!user) {
			return NextResponse.json({ error: "Usuário não encontrado." }, { status: 404 })
		}

		return NextResponse.json( user )
	} catch (error) {
		console.error("[GET USER ERROR]", error)
		return NextResponse.json({ error: "Erro interno do servidor." }, { status: 500 })
	}
}

export async function PATCH(req: NextRequest, { params }: { params: { id: string } }) {
	try {
		const session = await getServerSession(authOptions)

		if (!session?.user) {
			return NextResponse.json({ error: "Acesso não autorizado." }, { status: 401 })
		}

		const userIdFromSession = session.user.id
		const userOffice = session.user.office
		const userIdToUpdate = params.id

		if (userIdFromSession !== userIdToUpdate && userOffice !== "ADMIN") {
			return NextResponse.json({ error: "Acesso negado" }, { status: 403 })
		}

		const body = await req.json()

		const { name, email, password, office, phone, department, description } = body

		//if change password
		let passwordHash

		if (password) {
			const { hashPassword } = await import("@/lib/auth")

			passwordHash = await hashPassword(password)
		}

		const dataToUpdate: any = {
			name,
			email,
			...(passwordHash && { password: passwordHash }),
			phone,
			department,
			description
		}

		//only admin to change office
		if (userOffice === "ADMIN" && office) {
			dataToUpdate.office = office.toUpperCase() === "ADMIN" ? "ADMIN" : "GESTOR"
		}

		const updatedUser = await prisma.user.update({
			where: { id: userIdToUpdate },
			data: dataToUpdate
		})

		return NextResponse.json({ user: updatedUser })


	} catch (error) {
		console.log(error)
		return NextResponse.json({ error: "Erro ao atualizar usuário" }, { status: 500 })
	}
}

export async function DELETE(req: NextRequest,  { params }: { params: Promise<{ userIdToDelete: string }> }) {
	try {

		const token = req.headers.get("authorization")?.replace("Bearer ", "")
		if (!token) return NextResponse.json({ error: "Não autorizado" }, { status: 401 })

		const decoded = jwt.verify(token, process.env.JWT_SECRET!)
		if (typeof decoded !== "object") return NextResponse.json({ error: "Token inválido" }, { status: 401 })

		const userIdFromToken = (decoded as any).id
		const {userIdToDelete} = await params

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