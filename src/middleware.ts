import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';

export { default } from 'next-auth/middleware';

export const config = {
  matcher: [
    '/admin/:path*',
    '/mypage/:path*',
    '/infocard/generate/:path*',
    '/card/generate/:path*',
  ],
};

export async function middleware(request: NextRequest) {
  const token = await getToken({ req: request });
  if (!token && process.env.NEXTAUTH_URL) {
    return NextResponse.redirect(`${process.env.NEXTAUTH_URL}/login`);
  }
}
