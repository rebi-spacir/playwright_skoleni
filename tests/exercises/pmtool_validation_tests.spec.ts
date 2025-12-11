import { expect, test } from "@playwright/test";
test("Negative Asserts - hidden element, not having text", async ({ page }) => {
  await page.goto("https://tredgate.com/pmtool");
  // ! DŮLEŽITÉ: v rámci negativních kontrol je důležité ověřit, že je stránka načtená, jinak nám negativní test může přehlédnout chybu (kontrola proběhla ještě než byla stránka plně načtená, ověřovaný chybový stav se objevil až po assertu)
  await expect(page.locator("#username")).toBeVisible();
  await expect(page.locator("h3.form-title")).toHaveText("Login");
  await expect(page.locator("#username-error"), "2bvisible").not.toBeVisible();
  await expect(page.locator("#password-error"), "tobhidden").not.toBeHidden();
});

test("OD PETRA RESENI Negative Asserts - hidden element, not having text", async ({
  page,
}) => {
  await page.goto("https://tredgate.com/pmtool");
  await expect(page.locator("#username")).toBeVisible();
  await expect(
    page.locator("#username-error"),
    "Username validation is not visible"
  ).not.toBeVisible();
  await expect(
    page.locator("#password-error"),
    "Password validation is not visible"
  ).toBeHidden();
});

/*
Cvičení - testy na nevyplněná pole (⌛5:00):
Vytvořte nový testovací soubor ve složce exercises: pmtool_validation_tests.spec.ts
Vytvoř test:
Po otevření PMToolu nejsou vidět validační hlášky pro pole
Spusťte test

Lokátory:
Username validace: #username-error
Password validace: #password-error


Výzva:
V challenges složce vytvoř nový test soubor: ats_not_displayed_errors_challenge
Vytvoř test
Otevři stránku: https://automationteststore.com/
Otevři stránku s přihlášením
Zkontroluj, že není vidět zpráva: Error: Incorrect login or password provided.
Spusť test

*/
