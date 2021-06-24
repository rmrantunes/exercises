import { leftRotations, rightRotations } from "./rotations-of-a-string";

describe("All Rotations of a String", () => {
  it("should left rotate", () => {
    expect(leftRotations("abc")).toEqual(["abc", "bca", "cab"]);
    expect(leftRotations("abcdef")).toEqual([
      "abcdef",
      "bcdefa",
      "cdefab",
      "defabc",
      "efabcd",
      "fabcde",
    ]);
  });
  it("should right rotate", () => {
    expect(rightRotations("abc")).toEqual(["abc", "cab", "bca"]);
    expect(rightRotations("abcdef")).toEqual([
      "abcdef",
      "fabcde",
      "efabcd",
      "defabc",
      "cdefab",
      "bcdefa",
    ]);
  });
});
