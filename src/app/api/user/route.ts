import { authOptions } from "@/lib/authOptions";
import prisma from "@/lib/prisma"
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server"

export async function GET() {
	try {
		const session = await getServerSession(authOptions);

		if (!session || session.user.office !== "ADMIN") {
			return new Response("Unauthorized", { status: 401 });
		}
		
		const users = await prisma.user.findMany({
			orderBy: { createdAt: "desc" }
		})

		return NextResponse.json({ users })


	} catch (error) {
		console.log(error)
		return new NextResponse("Erro ao buscar usuários.", { status: 500 })
	}
}