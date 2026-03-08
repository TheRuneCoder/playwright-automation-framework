# Playwright Automation Framework

This repository contains a Playwright based automation framework designed to validate core ecommerce workflows.
The project demonstrates UI and API automation using Playwright and TypeScript.

---

## Tech Stack

* Playwright
* TypeScript
* Node.js

---

## Framework Features

* Page Object Model (POM)
* UI and API test coverage
* Test fixtures for shared setup
* Test tagging (`@smoke` and `@regression`)
* Parallel test execution
* HTML test reports
* GitHub Actions CI pipeline

---

## Framework Architecture

```
Tests
  ↓
Page Objects
  ↓
Fixtures / Utilities
  ↓
Playwright Test Runner
  ↓
Browser Execution
```

Explanation:

* **Tests** contain the actual test scenarios.
* **Page Objects** encapsulate UI interactions.
* **Fixtures** handle shared setup like login sessions.
* **Utilities** contain reusable helpers such as API helpers.
* **Playwright Test Runner** executes the tests and manages browser sessions.

---

## Project Structure

```
playwright-automation-framework

tests
  ui
    login.spec.ts
    cart.spec.ts
    checkout.spec.ts

  api
    products.api.spec.ts

pages
  LoginPage.ts
  InventoryPage.ts
  CartPage.ts
  CheckoutPage.ts

fixtures
  testFixture.ts

utils
  apiHelper.ts

config
  environment.ts

.github/workflows
  playwright.yml
```

---

## Test Scenarios

### UI Tests

* Login validation
* Add product to cart
* Complete checkout flow

### API Tests

* Validate product list from DummyJSON API

---

## Running the Tests

Install dependencies:

```
npm install
```

Install Playwright browsers:

```
npx playwright install
```

Run all tests:

```
npx playwright test
```

Run smoke tests only:

```
npm run smoke
```

Run regression tests:

```
npx playwright test --grep "@regression"
```

---

## Test Reports

After running tests, open the HTML report:

```
npx playwright show-report
```

The report includes:

* Test execution summary
* Screenshots on failure
* Trace viewer for debugging

---

## Continuous Integration

GitHub Actions is configured to run tests automatically on every push.

The CI pipeline performs:

* Dependency installation
* Browser installation
* Playwright test execution
