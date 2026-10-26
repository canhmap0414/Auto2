import { BasePage } from './base/BasePage';
import { ROUTES } from '../config/constants';

export class UserPage extends BasePage {
  protected readonly path = ROUTES.users;
}
