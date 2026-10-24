import type { APIResponse } from '@playwright/test';
import { ApiClient } from './ApiClient';
import { API_ENDPOINTS } from '../../config/constants';

export type ProductPayload = Record<string, unknown>;

export class ProductApi extends ApiClient {
  list(params?: Record<string, string | number>): Promise<APIResponse> {
    return this.get(API_ENDPOINTS.products, params);
  }

  getById(id: string | number): Promise<APIResponse> {
    return this.get(`${API_ENDPOINTS.products}/${id}`);
  }

  create(payload: ProductPayload): Promise<APIResponse> {
    return this.post(API_ENDPOINTS.products, payload);
  }

  update(id: string | number, payload: ProductPayload): Promise<APIResponse> {
    return this.put(`${API_ENDPOINTS.products}/${id}`, payload);
  }

  remove(id: string | number): Promise<APIResponse> {
    return this.delete(`${API_ENDPOINTS.products}/${id}`);
  }
}
