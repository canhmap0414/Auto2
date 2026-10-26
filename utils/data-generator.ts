import { randomBytes } from 'node:crypto';

function timestamp(): string {
  return new Date().toISOString().replace(/\D/g, '').slice(0, 14);
}

function randomSuffix(length = 4): string {
  return randomBytes(length).toString('hex').slice(0, length).toUpperCase();
}

function slug(testName: string): string {
  return testName.replace(/[^a-zA-Z0-9]+/g, '_').replace(/^_|_$/g, '');
}

export function uniqueId(prefix: string, testName: string): string {
  return `${prefix}_${slug(testName)}_${timestamp()}_${randomSuffix()}`;
}

export function uniqueEmail(testName: string): string {
  return `${uniqueId('auto', testName)}@auto.test`.toLowerCase();
}

export function uniqueUsername(testName: string): string {
  return uniqueId('auto', testName).toLowerCase();
}

export function uniqueCode(module: string): string {
  return uniqueId('TC', module.toUpperCase());
}
