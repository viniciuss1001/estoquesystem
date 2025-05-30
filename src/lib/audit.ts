import prisma from "./prisma"

type LogActionParams = {
	userId: string
	action: "create" | "update" | "delete" | "login" | "logout" | string
	entity: string
	entityId: string
	description: string
}

export async function logAction({
	userId, action, entity, entityId, description
}: LogActionParams) {
	try {
		await prisma.auditLog.create({
			data: {
				userId,
				action,
				entity,
				entityId,
				description,
			},
		})
	}
	catch(erro) {
		console.log("Erro ao registrar auditoria ", erro)
	}
}