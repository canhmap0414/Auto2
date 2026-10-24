import type { APIResponse } from '@playwright/test';
import { ApiClient } from './ApiClient';
import { API_ENDPOINTS } from '../../config/constants';
import type { Credentials } from '../../config/environments';

export class AuthApi extends ApiClient {
  login(credentials: Credentials): Promise<APIResponse> {
    return this.post(API_ENDPOINTS.login, credentials);
  }
}
