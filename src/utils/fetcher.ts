import returnFetchJson from 'return-fetch-json';

import { API_BASE_URL } from '@/constants';

export const fetcher = returnFetchJson({
  jsonParser: JSON.parse,
  baseUrl: API_BASE_URL,
});
