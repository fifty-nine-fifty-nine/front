import { getServerSession } from 'next-auth';

import { API_BASE_URL } from '@/constants';
import { authOptions } from '@/lib/auth';

export const serverFetcher = async <T>(
  operation: RequestInfo | URL,
  method: RequestInit['method'] = 'GET',
  _: string | undefined,
  body?: Record<string, any>,
) => {
  const session = await getServerSession(authOptions);
  const accessToken = session?.accessToken;

  const config: RequestInit = {
    method,
    body: body ? JSON.stringify(body) : null,
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${accessToken}`,
    },
    // next: { revalidate: 60 },
  };

  const res = await fetch(`${API_BASE_URL}${operation}`, config);
  const data: T | null = await res.json();

  console.log(data); // FIXME: 추후 제거
  return { data };
};
