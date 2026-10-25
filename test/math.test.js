import { describe, expect, it } from "vitest";
import { add, multiply } from "../src/math.js";

describe("add", () => {
  it("adds two numbers", () => {
    expect(add(2, 3)).toBe(5);
  });
});

describe("multiply", () => {
  it("multiplies two numbers", () => {
    expect(multiply(2, 3)).toBe(6);
  });
});
