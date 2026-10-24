import { BasePage } from './base/BasePage';
import { ROUTES } from '../config/constants';

export class DashboardPage extends BasePage {
  protected readonly path = ROUTES.dashboard;
}
