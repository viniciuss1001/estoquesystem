
import prisma from "./prisma";

type NotificationRole = "ADMIN" | "GESTOR"

interface NotifyOptions {
	title: string
	message: string
	type?: "SYSTEM" | "WARNING" | "INFO" | "ERROR"
	roles: NotificationRole[]
}

export async function notifyByUserRole({
	title, message, type = "INFO", roles
}: NotifyOptions) {

	const users = await prisma.user.findMany({
		where: {
			office: {
				in: roles
			}
		},
		select: {
			id: true
		}
	})

	const notifications = users.map((user) =>
		prisma.notification.create({
			data: {
				title,
				message,
				type,
				userId: user.id,
			},
		})
	)

	await Promise.all(notifications)
}