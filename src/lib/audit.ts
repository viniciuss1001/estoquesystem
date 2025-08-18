import { requireSession } from "./auth"
import prisma from "./prisma"

type LogActionParams = {
	userId: string
	companyId: string
	action: "create" | "update" | "delete" | "login" | "logout" | string
	entity: string
	entityId: string
	description: string
}

export async function logAction({
	userId, action, entity, entityId, description
}: LogActionParams) {
	try {
		const {session} = await requireSession()


		await prisma.auditLog.create({
			data: {
				companyId: session?.user.companyId!,
				userId,
				action,
				entity,
				entityId,
				description,
			},
		})
	}
	catch (erro) {
		console.log("Erro ao registrar auditoria ", erro)
	}
}