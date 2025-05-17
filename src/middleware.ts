import { getToken } from 'next-auth/jwt'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const PUBLIC_PATHS = ['/login', '/register', '/']

export async function middleware(request: NextRequest) {
	const pathname = request.nextUrl.pathname

	if (PUBLIC_PATHS.includes(pathname)) {
		return NextResponse.next()
	}

	const token = await getToken({
		req: request, secret: process.env.JWT_SECRET!
	})

	if (!token) {
		return NextResponse.redirect(
			new URL("/login", request.url)
		)
	}

	if (pathname.startsWith("/admin") && token.office !== "ADMIN") {
		return NextResponse.redirect(new URL("/", request.url))
	}

	return NextResponse.next()
}

export const config = {
	matcher: [
		// Protege todas essas rotas
		"/dashboard/:path*",
		"/admin/:path*",
		"/gestor/:path*",
		"/products/:path*",
		"/movements/:path*",
		"/suppliers/:path*",
	],
}