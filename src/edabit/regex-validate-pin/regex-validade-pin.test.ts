import { myRegExp } from "./regex-validade-pin";

describe("Regex Validade Pin", () => {
  it("should pass the regex test", () => {
    expect(myRegExp.test("1234")).toBe(true);
    expect(myRegExp.test("900876")).toBe(true);
  });
  it("should NOT pass the regex test", () => {
    expect(myRegExp.test("89abc1")).toBe(false);
    expect(myRegExp.test("45135")).toBe(false);
    expect(myRegExp.test(" 4983")).toBe(false);
  });
});
