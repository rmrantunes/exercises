import { advancedSort } from "./advanced-array-sort";

describe("Advenced Array Sort", () => {
  it("should swap correctly", () => {
    expect(advancedSort([2, 1, 2, 1])).toEqual([
      [2, 2],
      [1, 1],
    ]);
    expect(advancedSort([5, 4, 5, 5, 4, 3])).toEqual([[5, 5, 5], [4, 4], [3]]);
    expect(advancedSort(["b", "a", "b", "a", "c"])).toEqual([
      ["b", "b"],
      ["a", "a"],
      ["c"],
    ]);
  });
});
