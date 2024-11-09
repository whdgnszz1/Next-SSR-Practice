import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl

  if (pathname.startsWith('/login') || pathname.startsWith('/signup')) {
    return NextResponse.next()
  }

  const accessToken = req.cookies.get('accessToken')?.value

  if (!accessToken) {
    return NextResponse.redirect(new URL('/login', req.url))
  }

  const requestHeaders = new Headers(req.headers)
  requestHeaders.set('Authorization', `${accessToken}`)

  return NextResponse.next({
    request: {
      headers: requestHeaders
    }
  })
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|assets).*)', '/']
}
