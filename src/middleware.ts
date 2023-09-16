import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';

export { default } from 'next-auth/middleware';

export const config = {
  matcher: ['/mypage/:path*', '/businesscard/:path*', '/petcard/:path*'],
};

export async function middleware(request: NextRequest) {
  const token = await getToken({ req: request });
  if (!token && process.env.NEXTAUTH_URL) {
    return NextResponse.redirect(`${process.env.NEXTAUTH_URL}/login`);
  }
}
