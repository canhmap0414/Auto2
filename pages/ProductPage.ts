import { BasePage } from './base/BasePage';
import { ROUTES } from '../config/constants';

export class ProductPage extends BasePage {
  protected readonly path = ROUTES.products;
}
