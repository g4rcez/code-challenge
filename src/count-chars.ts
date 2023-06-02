type Result = Record<string, number>;

/*
  Desafio 2 - Sequencia de Fibonacci
  https://en.wikipedia.org/wiki/Fibonacci_Sequence
  F0 = 0, F1 = 1,
  FN = FN-1 + FN-2
  Onde N > 1
 */

export const countChars = (word: string, chars: string[]): Result =>
  chars.reduce(
    (acc, el) => ({
      ...acc,
      [el]: word.match(new RegExp(el, "gi"))?.length ?? 0,
    }),
    {}
  );
