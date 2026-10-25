import { describe, expect, it } from "vitest";
import { add, divide, multiply } from "../src/math.js";

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

describe("divide", () => {
  it("divides two numbers", () => {
    expect(divide(6, 3)).toBe(2);
  });

  it("throws when dividing by zero", () => {
    expect(() => divide(1, 0)).toThrow("Division by zero");
  });
});
