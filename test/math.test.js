import { describe, expect, it } from "vitest";
import { add, square } from "../src/math.js";

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
