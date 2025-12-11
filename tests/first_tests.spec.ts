import { test } from "@playwright/test";

test("First Test", async ({ page }) => {
  await page.goto("https://tredgate.com/pmtool");
  await page.locator("#username").fill("playwright_jaro24");
  await page.locator("#password").fill("Playwright!2024");
  await page.locator('[type="submit"]').click();
});

/*
Cvičení 1(⌛3:00)
V souboru first_tests.spec.ts vyplň heslo "Playwright!2024". Lokátor použij #password


Výzva:
Připravte nový test soubor ve složce: tests: automationteststore_tests.spec.ts:
Otevřete stránku: https://automationteststore.com/index.php?rt=account/create 
Vyplňte všechny povinná textová pole (selecty zatím všechny vynechejte)
Selektory můžete získat v DevTool.
*/

/*
Cvičení2: Kliknutí na projekt (⌛5:00):
Vytvoř složku: exercices ve složce tests
Vytvoř nový test soubor: pmtool_project_exercise.spec.ts
Vytvoř nový test: Otevři projekty v PMTool
Otevři  stránku: http://tredgate.com/pmtool a přihlas se
Klikni na tlačítko Projects (lokátor: #Projects) v menu po přihlášení:



Výzva - Otevři registrační stránku automationteststore:
Vytvoř novou složku v tests: challenges
Vytvoř nový test soubor: automationteststore_actions_challenge.spec.ts
Vytvoř nový test: E2E registration
Otevři  https://automationteststore.com/ 
Otevři registrační stránku
Registruj nového uživatele

*/

/*
Cvičení: vyplň a odešli contact us formulář (⌛10:00):
Vytvoř nový test soubor ve složce exercises: webtrain_contact_us_exercise.spec.ts
Vytvoř nový test: Contact Us Cvičení
Otevři Webtrain Contact Us
https://tredgate.com/webtrain/contact.html 
Vyplň všechna pole včetně checkboxů a radio buttonů
Date of Contact vyplňte ve formátu: “YYYY-MM-DD” (metoda fill)
Klikni na odeslání formuláře
Spusť test

Lokátory:
Full name: #full-name
Email address: #email
Date of Contact: #contact-date
Role: #role
Comments: #comments
Subscribe to newsletter: #newsletter
Submit: [data-testid="button-submit"]



Výzva - Registrace na tredgate e-shop:
V challenges složce vytvoř nový test soubor: teg_eshop_registration_challenge
Vytvoř test
Otevři stránku: http://tredgate.com/eshop/
Otevři registraci, registruj se
Přihlas se
Spusť test


*/

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
Tlačítko Save: button[type='submit']




Výzva:
V challenges složce vytvoř nový test soubor: ats_product_tests_challenge
Vytvoř test
Otevři stránku: https://automationteststore.com/
Otevři detail produktu: BeneFit Girl Meets Pearl
Zkontroluj:
Viditelnost ceny
Input na počet má hodnotu 1
Text pole oznamujícího, že je produkt vyprodán
Spusť test


*/

//2.den

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

/*

Cvičení (⌛8:00):
Vytvořte volání API v Playwright:
Složka: tests/exercises
Test: regres_in_register_test.spec.ts
Request:
Metoda: POST
URL: https://reqres.in/api/register
Body (data):
{
    "email": "eve.holt@reqres.in",
    "password": "pistol"
}
Hlavičky (nezapomínejte dávat do uvozovek):
Accept-Encoding: gzip, deflate, br
x-api-key: reqres-free-v1



Výzva:
Vytvořte volání v rámci Magic The Gathering API, které zavolá:
https://docs.magicthegathering.io/#api_v1cards_list 
Z výsledku vezme 2. ID v pořadí a použije ho pro provolání dalšího requestu.
https://docs.magicthegathering.io/#api_v1cards_get 

*/

/*
Cvičení (⌛8:00):
Ve složce exercises vytvořte nový test soubor:  api_asserts_exercise.spec.ts
Vytvořte volání API v playwright na https://tegb-backend-877a0b063d29.herokuapp.com/train
Metoda: PATCH (request.patch)
Otestujte, že timestamp je text (string), id = 1


Výzva:
Vytvořte volání GET https://api.pokemontcg.io/v2/cards/xy1-1
Otestujte:
Název Pokémona = Venusaur-EX
artist = Eske Yoshinob
attacks:
name = Poison Powder
name = Jungle Hammer

*/
