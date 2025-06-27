import bcrypt from 'bcryptjs'
import { getServerSession } from 'next-auth'
import { authOptions } from './authOptions'

export async function hashPassword(password: string) {
	return await bcrypt.hash(password, 10)
}

export async function comparePasswords(password: string, hash: string) {
	return await bcrypt.compare(password, hash)
}

export async function requireSession() {
	const session = await getServerSession(authOptions)
	if (!session) return { error: new Response("unauthorized", { status: 401 }) }

	return { session }
}

export async function requireAdmin(session: any) {
	if (session.user.office !== "ADMIN") {
		return { error: new Response("Unauthorized - Isn Admin") }
	}

	return { ok: true }
}