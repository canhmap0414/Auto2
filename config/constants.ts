export const TIMEOUTS = {
  test: 60_000,
  expect: 10_000,
  action: 10_000,
  navigation: 30_000,
} as const;

export const VIEWPORT = { width: 1920, height: 1080 } as const;

export const ROUTES = {
  login: '/login',
  dashboard: '/dashboard',
  products: '/products',
  users: '/users',
} as const;

export const API_ENDPOINTS = {
  login: '/auth/login',
  products: '/products',
} as const;

export const STORAGE_STATE_PATH = '.auth/user.json';

export const SCREENSHOT_NAMES = {
  passed: 'trang_thai_cuoi_cua_test',
  failed: 'trang_thai_khi_that_bai',
} as const;
