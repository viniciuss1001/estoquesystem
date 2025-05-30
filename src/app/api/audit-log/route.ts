import { authOptions } from "@/lib/authOptions";
import prisma from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
	const session = await getServerSession(authOptions)

	if (!session) {
		return new NextResponse("Não autorizado", { status: 401 });
	}

	try {
		const logs = await prisma.auditLog.findMany({
			orderBy: { createdAt: "desc" },
			include: {
				user: {
					select: { email: true },
				},
			},
		});

		return NextResponse.json(logs);
	} catch (error) {
		console.error("Erro ao buscar audit log:", error);
		return NextResponse.json({ error: "Erro ao buscar log de auditoria" }, { status: 500 });
	}
}