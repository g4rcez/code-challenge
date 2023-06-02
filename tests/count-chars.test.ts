import { countChars } from "../src/count-chars";
import { test, describe, expect } from "vitest";

describe("Should test letter counter", () => {
  test("✅ Should test case 1 - Count R", () => {
    expect(countChars("O rato roeu a roupa do rei de roma", ["r"])).toStrictEqual({ r: 5 });
  });

  test("✅ Should test case 2 - Count all vowels", () => {
    expect(countChars("Um simples texto", ["a", "e", "i", "o", "u"])).toStrictEqual({
      a: 0,
      e: 2,
      i: 1,
      o: 1,
      u: 1,
    });
  });
});
