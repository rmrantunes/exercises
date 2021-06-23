export function isPandigital(number: number) {
  const ZERO_TO_NINE = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  return ZERO_TO_NINE.every((n) => String(number).includes(n));
}
