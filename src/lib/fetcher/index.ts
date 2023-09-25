import { IS_BROWSER } from '@/constants';

import { useClientFetcher } from './clientFetcher';
import { serverFetcher } from './serverFetcher';

export const fetcher = async <T>(
  operation: RequestInfo | URL,
  method: RequestInit['method'] = 'GET',
  body: RequestInit['body'] = null,
) => {
  const fetcherType = IS_BROWSER ? useClientFetcher<T> : serverFetcher<T>;

  return await fetcherType(operation, method, body);
};
