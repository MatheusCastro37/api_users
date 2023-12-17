export interface HttpResponse<T> {
  statusCode: number;
  body: T | string;
}

export interface HttpRequest<B> {
  headers?: string;
  params?: string;
  body?: B;
}
