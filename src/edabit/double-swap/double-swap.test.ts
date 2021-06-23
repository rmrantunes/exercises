import { doubleSwap } from "./double-swap";

describe("Double Character Swap", () => {
  it("should swap correctly", () => {
    expect(doubleSwap("aabbccc", "a", "b")).toBe("bbaaccc");
    expect(doubleSwap("random w#rds writt&n h&r&", "#", "&")).toBe(
      "random w&rds writt#n h#r#"
    );
    expect(doubleSwap("128 895 556 788 999", "8", "9")).toBe(
      "129 985 556 799 888"
    );
  });
});
