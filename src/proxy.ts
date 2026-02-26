import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function proxy(request: NextRequest) {
    const token = request.cookies.get('token')?.value

    const protectedPaths = ['/products/new-product', '/cart']

    // If trying to access a protected page without a token
    if (protectedPaths.includes(request.nextUrl.pathname) && !token) {
        return NextResponse.redirect(new URL('/login', request.url))
    }

    return NextResponse.next()
}

// See "Matching Paths" below to learn more
export const config = {
    matcher: ['/products/new-product', '/cart'],
}
