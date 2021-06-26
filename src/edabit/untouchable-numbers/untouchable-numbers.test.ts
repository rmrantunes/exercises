import { isUntouchable } from "./untouchable-numbers";

describe("Untochable Numbers", () => {
  it("should return true if number is unuchable", () => {
    expect(isUntouchable(2)).toBe(true);
  });
  it("should return an array of proper divisors sum is equal to the number", () => {
    expect(isUntouchable(3)).toEqual([4]);
    expect(isUntouchable(6)).toEqual([6, 25]);
  });
  it("should return an Invalid Input message if number is lower than 2", () => {
    expect(isUntouchable(1)).toBe("Invalid Input: number is lower than 2")
  });
});
