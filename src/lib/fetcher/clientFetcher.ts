import { API_BASE_URL } from '@/constants';

export const clientFetcher = async <T>(
  operation: RequestInfo | URL,
  method: RequestInit['method'] = 'GET',
  accessToken: string | undefined,
  body?: Record<string, any>,
) => {
  if (!accessToken) throw Error('clientFetcher는 accessToken이 필요합니다');

  const config: RequestInit = {
    method,
    body: body ? JSON.stringify(body) : null,
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${accessToken}`,
    },
    cache: 'no-store',
    next: { revalidate: 0 },
  };

  const res = await fetch(`${API_BASE_URL}${operation}`, config);
  const data: T | null = res ? await res.json() : null;

  return { data };
};
