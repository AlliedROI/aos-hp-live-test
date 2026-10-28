import { describe, expect, it } from "vitest";
import { add, quadruple } from "../src/math.js";

describe("add", () => {
  it("adds two numbers", () => {
    expect(add(2, 3)).toBe(5);
  });
});

describe("quadruple", () => {
  it("multiplies a number by four", () => {
    expect(quadruple(3)).toBe(12);
    expect(quadruple(0)).toBe(0);
    expect(quadruple(-2)).toBe(-8);
  });
});
