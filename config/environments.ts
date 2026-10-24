import 'dotenv/config';

export interface Credentials {
  username: string;
  password: string;
}

export interface Environment {
  name: string;
  baseUrl: string;
  apiUrl: string;
  credentials: Credentials;
  headless: boolean;
}

const baseUrl = process.env.BASE_URL ?? '';

export const env: Environment = {
  name: process.env.TEST_ENV ?? 'dev',
  baseUrl,
  apiUrl: process.env.API_URL || baseUrl,
  credentials: {
    username: process.env.TEST_USERNAME ?? '',
    password: process.env.TEST_PASSWORD ?? '',
  },
  headless: process.env.CI ? true : process.env.HEADLESS === 'true',
};
