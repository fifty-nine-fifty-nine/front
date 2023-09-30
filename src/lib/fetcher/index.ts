import { IS_BROWSER } from '@/constants';

import { clientFetcher } from './clientFetcher';
import { serverFetcher } from './serverFetcher';

export const fetcher = async <T>(
  operation: RequestInfo | URL,
  method: RequestInit['method'] = 'GET',
  accessToken?: string | undefined,
  body?: Record<string, any>,
) => {
  const fetcherType = IS_BROWSER ? clientFetcher<T> : serverFetcher<T>;

  return await fetcherType(operation, method, accessToken, body);
};
