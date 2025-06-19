export interface FetchOptions {
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
  headers?: Record<string, string>;
  body?: any;
  cache?: RequestCache;
}

export interface PageInfo {
  totalElements: number;
  totalPages: number;
  page: number;
  size: number;
  hasPrevious: boolean;
  hasNext: boolean;
}

export interface ApiResponse<T> {
  error: boolean;
  message: string;
  data?: T;
  pageInfo?: PageInfo;
}

export interface FetchApiResult<T> {
  data: ApiResponse<T>;
  cookie: string | null;
  status: number;
}
