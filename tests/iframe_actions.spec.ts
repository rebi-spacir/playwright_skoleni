// tests/
// iframe_actions.spec.ts
import { test } from "@playwright/test";

test("Operating with iframes", async ({ page }) => {
  await page.goto("https://tredgate.com/webtrain/web-actions.html");
  const iframePage = page.frameLocator(   //lokator iframe
    '[data-testid="test-automation-iframe"]'
  );
  await iframePage.locator("#name").fill("Vypisujeme do iframe!"); //zde uz pristupuju v ramci iframe jako k obycejne strance
});
