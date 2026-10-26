import * as allure from 'allure-js-commons';

export type Severity = 'blocker' | 'critical' | 'normal' | 'minor' | 'trivial';

export interface TestMeta {
  tcId: string;
  title: string;
  description: string;
  severity: Severity;
  tags: string[];
}

export async function applyTestMeta(meta: TestMeta): Promise<void> {
  await allure.displayName(meta.title);
  await allure.description(meta.description);
  await allure.severity(meta.severity);
  await allure.tags(...meta.tags);
  await allure.label('testId', meta.tcId);
}
