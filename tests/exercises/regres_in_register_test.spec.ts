import { test } from "@playwright/test";

test("moje", async ({ request }) => {
  await request.post("https://reqres.in/api/register", {
    data: {
      email: "eve.holt@reqres.in",
      password: "pistol",
    },
    headers: {
      "Accept-Encoding": "gzip, deflate, br",
      "x-api-key": "reqres-free-v1",
    },
  });
});

test("Exercise: sending HTTP Requests", async ({ request }) => {
  await request.post("https://reqres.in/api/register", {
    data: {
      email: "eve.holt@reqres.in",
      password: "pistol",
    },
    headers: {
      "Accept-Encoding": "gzip, deflate, br",
      "x-api-key": "regres-free-v1",
    },
  });
});

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
