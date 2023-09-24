'use client';

import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';

import { API_BASE_URL } from '@/constants';

export const useClientFetcher = <T>(
  operation: RequestInfo | URL,
  method: RequestInit['method'] = 'GET',
  body: RequestInit['body'] = null,
) => {
  const { data: session } = useSession();
  const accessToken = session?.accessToken;

  const [data, setData] = useState<T | null>(null);

  useEffect(() => {
    if (!accessToken) return;

    const fetchData = async () => {
      const config: RequestInit = {
        method,
        body: body ? JSON.stringify(body) : null,
        headers: {
          'Content-Type': 'application/json',
          authorization: `Bearer ${accessToken}`,
        },
        next: { revalidate: 60 },
      };

      const res = await fetch(`${API_BASE_URL}${operation}`, config);
      const data = await res.json();
      console.log(data); // FIXME: 추후 제거

      setData(data);
    };

    fetchData();
  }, [operation, method, body, accessToken]);

  return { data };
};
