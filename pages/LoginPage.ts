import { BasePage } from './base/BasePage';
import { ROUTES } from '../config/constants';

export class LoginPage extends BasePage {
  protected readonly path = ROUTES.login;
}
