import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname === '/out') {
    return NextResponse.rewrite(new URL('/sign-out', request.url))
  }
}
