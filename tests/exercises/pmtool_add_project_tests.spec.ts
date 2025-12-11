import { expect, test } from "@playwright/test";

test("cviceni2", async ({ page }, asyn) => {
  await page.goto("https://tredgate.com/pmtool");
  await page.locator("#username").fill("playwright_jaro24");
  await page.locator("#password").fill("Playwright!2024");
  await page.locator('[type="submit"]').click();
  await page.locator("#Projects").click();

  await expect(
    page.locator(".table-scrollable table"),
    "tabulka projektu je videt"
  ).toBeVisible();
  await page.locator(' [test_id="Add Project"]').click();

  await expect(
    page.locator('div[data-testid="Name"] input'),
    "Input Name is Visible"
  ).toBeVisible();

  await expect(
    page.locator("button[type='submit']"),
    "Save Button have Text"
  ).toHaveText("Save");
});

/*
Cvičení - kontrola pmtool add project (⌛10:00):
Vytvořte nový testovací soubor ve složce exercises: pmtool_add_project_tests.spec.ts
Vytvoř nový test:
Otevře PMTool a přihlásí se
Otevře menu Projects
Počkejte na zobrazení tabulky projektů, jinak testy mohou padat (await expect().toBeVisible())
Klikne na tlačítko Add Project 
Zkontroluje v otevřeném boxu:
Viditelnost: input Name
Text: tlačítko Save
Spusť test

Lokátory:
Projects menu: #Projects
Tabulka projektů: .table-scrollable table
Tlačítko Add Project: [test_id="Add Project"]
Input Name: div[data-testid="Name"] input
Tlačítko Save: button[type='submit']*/
