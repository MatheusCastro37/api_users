/* eslint-disable @typescript-eslint/no-explicit-any */
import { HttpResponse } from "./protocols";

export const ok = <T>(body: any): HttpResponse<T> => ({
  statusCode: 200,
  body,
});

export const created = <T>(body: any): HttpResponse<T> => ({
  statusCode: 201,
  body,
});

export const badRequest = (message: string): HttpResponse<string> => ({
  statusCode: 200,
  body: message,
});

export const serverError = (): HttpResponse<string> => ({
  statusCode: 200,
  body: "Algo deu errado.",
});
