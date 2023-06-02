import { countChars } from "../src/count-chars";
import { test, describe, expect } from "vitest";
import { fibNumber } from "../src/fib-number";

describe("Should test Fibonacci sequence", () => {
  test("✅ Should test case 0 - The third number of Fibonacci", () => {
    expect(fibNumber(3)).toBe(2);
  });
  test("✅ Should test case 1 - The 5o number of Fibonacci", () => {
    expect(fibNumber(5)).toBe(5);
  });
  test("✅ Should test case 3 - The 12o number of Fibonacci", () => {
    expect(fibNumber(12)).toBe(144);
  });
});
