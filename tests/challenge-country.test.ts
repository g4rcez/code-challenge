import { describe, expect, it } from "vitest";
import { countriesService, getCountries, sort } from "../src/desafio-countries-api/countries";
import {Country} from "../src/mocks/countries.type";

const test = it.concurrent;

describe("Should test countries.ts", () => {
  test("Should test sorter", () => {
    const array = [
      { name: "Zegne", age: 31 },
      { name: "Couldson", age: 31 },
      { name: "Bob", age: 31 },
      { name: "Ana", age: 31 },
      { name: "Alice", age: 30 },
      { name: "David", age: 31 },
    ];
    const list = sort(array, "name");
    console.log(list);
    expect(list[0].name).toBe("Alice");
    expect(list[1].name).toBe("Ana");
  });

  test("Should test request to countries API", async () => {
    const response = await getCountries();
    console.log(JSON.stringify(response, null, 4));
    expect(Array.isArray(response)).toBe(true);
    expect(response.find((x: Country) => x.name.common === "Brazil")).toBeTruthy();
  });

  test("Should paginate", async () => {
    const response = await countriesService({ fields: "name,status", page: 1, pageSize: 50 });
    console.log(JSON.stringify(response, null, 4));
  });
});
