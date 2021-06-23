import { isPandigital } from "./pandigital-numbers";

describe("Pandigital Numbers", () => {
  it("should contain 0-9 at least once", () => {
    expect(isPandigital(98140723568910)).toBe(true);
  });
  it("shoult not contain 0-9", () => {
    expect(isPandigital(90864523148909)).toBe(false);
  });
});
