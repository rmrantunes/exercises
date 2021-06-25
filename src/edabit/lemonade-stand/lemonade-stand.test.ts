import { lemonade } from "./lemonade-stand";

describe("Lemonade Stand", () => {
  it("should have enough change for every customer", () => {
    expect(lemonade([5, 5, 5, 10, 20])).toBe(true);
    expect(lemonade([5, 5, 10, 10, 20])).toBe(false);
    expect(lemonade([10, 10])).toBe(false);
    expect(lemonade([5, 5, 10])).toBe(true);
  });
});
