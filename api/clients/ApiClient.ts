import type { APIRequestContext, APIResponse } from '@playwright/test';

type Params = Record<string, string | number | boolean>;

export class ApiClient {
  private token?: string;

  constructor(protected readonly request: APIRequestContext) {}

  setToken(token: string): void {
    this.token = token;
  }

  private headers(): Record<string, string> {
    return this.token ? { Authorization: `Bearer ${this.token}` } : {};
  }

  protected get(url: string, params?: Params): Promise<APIResponse> {
    return this.request.get(url, { headers: this.headers(), params });
  }

  protected post(url: string, data: unknown): Promise<APIResponse> {
    return this.request.post(url, { headers: this.headers(), data });
  }

  protected put(url: string, data: unknown): Promise<APIResponse> {
    return this.request.put(url, { headers: this.headers(), data });
  }

  protected delete(url: string): Promise<APIResponse> {
    return this.request.delete(url, { headers: this.headers() });
  }
}
