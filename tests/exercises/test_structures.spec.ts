// tests/
// test_structures.spec.ts
import { test, expect } from "@playwright/test";

test.describe("Test Suite - Pmtool Login Tests", () => {
  test.beforeEach(async ({ page }) => {
    console.log("Běžím před každým testem");
    await page.goto("https://tredgate.com/pmtool");
  });

  test.beforeAll(() => {
    //automaticky spousti pro kazdy worker!! v terminalu prepinac --workers
    console.log("Běžím před prvním testem");
  });

  test.afterEach(async ({ page }) => {
    console.log("Běžím po každém testu (většinou uklízím)");
  });

  test.afterAll(async ({ browser }) => {
    console.log("Běžím po posledním testu.");
  });

  test("Successful Login", async ({ page }) => {
    await page.locator("#username").fill("playwright_jaro24");
    await page.locator("#password").fill("Playwright!2024");
    await page.locator('[type="submit"]').click();
    await expect(
      page.locator("#welcome-page-header"),
      "Welcome Page Header have Text"
    ).toHaveText("Vítej v testovací aplikaci Tredgate Project");
  });

  test("Failed Login", async ({ page }) => {
    await page.locator("#username").fill("ABCD1234");
    await page.locator("#password").fill("4321DCBA");
    await page.locator('[type="submit"]').click();
    await expect(
      page.locator(".alert"),
      "Error message about failed login is displayed"
    ).toBeVisible();
  });

  test.skip("Skipped test - will not run", async ({ page }) => {
    await page.locator("#username").fill("playwright_jaro24");
    await page.locator("#password").fill("Playwright!2024");
    await page.locator('[type="submit"]').click();
  });

  //   test.only("Only test - only this test will run", async ({ page }) => {
  //     await page.locator("#username").fill("playwright_jaro24");
  //     await page.locator("#password").fill("Playwright!2024");
  //     await page.locator('[type="submit"]').click();
  //   });
});
