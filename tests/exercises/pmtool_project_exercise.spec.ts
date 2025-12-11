import {test} from "@playwright/test";

test("cviceni2", async ({ page },asyn) => {
  await page.goto("https://tredgate.com/pmtool");
  await page.locator('#username').fill("playwright_jaro24");
  await page.locator('#password').fill("Playwright!2024");
  await page.locator('[type="submit"]').click();
  await page.locator('#Projects').click();
});