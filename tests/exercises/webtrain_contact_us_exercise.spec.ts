import { test } from "@playwright/test";
import path from "path";

test("fill and pressSequentially", async ({ page }) => {
  await page.goto("https://tredgate.com/pmtool");
  const usernameInput = page.locator("#username");
  await usernameInput.fill("Start");
  await usernameInput.fill("End");
  await usernameInput.pressSequentially("Kde toto bude?");
  await usernameInput.clear(); // ? Vymaže hodnotu z pole
  await usernameInput.pressSequentially("Pomalý text", { delay: 500 }); // ? Postupné vypsání textu se zpožděním 500 ms mezi jednotlovými úhozy (2 úhozy/sec.)
});

test("selectOption - dropdowns", async ({ page }) => {
  await page.goto("https://tredgate.com/webtrain/registration.html");
  await page.locator("#gender").selectOption("female"); // ? Vybírá <option> z <select> pomocí atributu value, například <option value="female">Žena</option>
  await page.locator("#gender").selectOption({ label: "Male" }); // ? Vybírá <option> z <select> pomocí textu (labelu), například: <option value="23">Male</option>
});

test("Radio button, Checkbox button - check", async ({ page }) => {
  await page.goto("https://tredgate.com/webtrain/registration.html");
  // * Radio button
  await page.locator("#contact-email").check(); // ? Výběr radio buttonu

  // * Checkbox
  await page.locator("#interests-travel").check(); // ? Zakliknutí checkboxu
  await page.locator("#interests-sports").check();
  await page.locator("#interests-travel").uncheck(); // ? Odkliknutí checkboxu (nelze na radio button)
});



test("Date - fill input type date", async ({ page }) => {
  await page.goto("https://tredgate.com/webtrain/registration.html");
  await page.locator("#date-of-birth").fill("1945-03-02");
  await page.locator("#role").selectOption("Instructor");
});



test("Contact us", async ({ page }) => {
  await page.goto("https://tredgate.com/webtrain/contact.html");
  await page.locator('#full-name').fill("playwright_jaro24");
  await page.locator('#email').fill("bla@test.cz");
  await page.locator('#comments').fill("sdfsdfsdfsfn ksfh sldjfh sfjh lsjfsl;jfs;jfsl;jfsd");
  await page.locator("#contact-date").fill("2026-01-20");
  await page.locator("#role").selectOption("student");
  await page.locator("#newsletter").check();
  await page.locator('[data-testid="button-submit"]').click();
});

test("File Upload", async ({ page }) => {
  await page.goto("https://tredgate.com/webtrain/registration.html");

  // * 1. Získání cesty k souboru
  const filePath = path.resolve(__dirname, "../assets/upload_file.txt");
  // require("../assets/upload_file.txt"); // ? require napovídá cestu k složkám, může nám sloužit jako pomocník při vytváření cesty k souboru v path.resolve()

  // * 2. Zapnutí odposlouchávání na událost "filechooser" <- okno: výběr souboru
  const filechooserListener = page.waitForEvent("filechooser"); // ! Nesmí se použít await!

  // * 3 . Kliknutí na upload input
  await page.locator("#file-upload").click();

  // * 4. Odchycení okna OS + nahrání souboru
  const filechooser = await filechooserListener;
  await filechooser.setFiles(filePath);

  // ! Čekáme na odchycení do screenshotu - wait for timeout používáme naprosto minimálně!
  await page.waitForTimeout(1000);
});
