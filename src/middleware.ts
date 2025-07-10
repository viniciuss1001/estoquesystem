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
		// protect all routes
		"/audit-log/:path*",
		"/categories/:path*",
		"/dashboard/:path*",
		"/delivery/:path*",
		"/movements/:path*",
		"/products/:path*",
		"/service-locations/:path*",
		"/service-providers/:path*",
		"/service-types/:path*",
		"/services/:path*",
		"/settings/:path*",
		"/supplier-invoice/:path*",
		"/suppliers/:path*",
		"/users/:path*",
		"/warehouse-product/:path*",
		"/warehouses/:path*",
		"/admin/:path*",

	],
}