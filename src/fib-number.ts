export const fibNumber = (n: number): number => (n <= 1 ? n : fibNumber(n - 1) + fibNumber(n - 2));
