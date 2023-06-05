import { expect, describe, test } from "vitest";
import { generateLog } from "../src/desafio-game-logs/server";

describe("Should test desafio-game-logs", () => {
  test("Should count correct matches", () => {
    const result = generateLog({ heroes: 5, matches: 2 });
    console.log(result);
    expect(result.filter((x) => x.match === 1).length).toBe(5);
    expect(result.length).toBe(10);
  });
});
