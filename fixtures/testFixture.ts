import { test as base } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

export const test = base.extend({
  loggedInPage: async ({ page }, use) => {

    const login = new LoginPage(page);

    await login.goto();
    await login.login('standard_user','secret_sauce');

    await use(page);
  }
});

export { expect } from '@playwright/test';
