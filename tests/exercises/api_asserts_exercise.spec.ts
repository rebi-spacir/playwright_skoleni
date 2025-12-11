import { expect, test } from "@playwright/test";

test("cviceni na timestamp", async ({ request }) => {
  const response = await request.patch(
    "https://tegb-backend-877a0b063d29.herokuapp.com/train"
  );
  const responseBody = await response.json();
  // * Kontrola, že body obsahuje property (klíč)
  expect(responseBody, "Response Body have Property createdAt").toHaveProperty(
    "timestamp"
  );

  // * Kontrola, že userId je číslo
  expect(typeof responseBody.timestamp, "body.userId is a Number").toBe(1);
});

test("Exercise: API Asserts", async ({ request }) => {
  const response = await request.patch(
    "https://tegb-backend-877a0b063d29.herokuapp.com/train"
  );
  const responseBody = await response.json();
  expect(
    typeof responseBody.timestamp,
    "responseBody.timestamp type is a string"
  ).toEqual("string");
  expect(responseBody.id, "responseBody.id have value").toEqual(1);
});

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
