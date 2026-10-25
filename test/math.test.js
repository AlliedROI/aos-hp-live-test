import { describe, expect, it } from "vitest";
import { add, clamp, square } from "../src/math.js";

describe("add", () => {
  it("adds two numbers", () => {
    expect(add(2, 3)).toBe(5);
  });
});

describe("square", () => {
  it("squares a number", () => {
    expect(square(4)).toBe(16);
    expect(square(-3)).toBe(9);
  });
});

describe("clamp", () => {
  it("clamps a number to the range", () => {
    expect(clamp(5, 0, 10)).toBe(5);
    expect(clamp(-2, 0, 10)).toBe(0);
    expect(clamp(15, 0, 10)).toBe(10);
  });
});
