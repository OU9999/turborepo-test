import { ApiResponse, FetchApiResult, FetchOptions } from './fetch-api.type';

export async function fetchApi<T>(
  endpoint: string,
  options: FetchOptions = {},
): Promise<FetchApiResult<T>> {
  const {
    method = 'GET',
    headers = {},
    body = null,
    cache = 'no-store',
  } = options;

  const defaultHeader: {} = { 'Content-Type': 'application/json' };

  const config: RequestInit = {
    method,
    headers: {
      ...defaultHeader,
      ...headers,
    },
    cache,
    credentials: 'include',
  };

  if (body) {
    config.body = JSON.stringify(body);
  }

  try {
    const response = await fetch(endpoint, config);
    const cookie = response.headers.get('set-cookie');
    const data = await response.json();

    return {
      data: data as ApiResponse<T>,
      cookie,
      status: response.status,
    };
  } catch (error) {
    console.error('API call failed:', error);
    throw error;
  }
}
