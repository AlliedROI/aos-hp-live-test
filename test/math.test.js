import { describe, expect, it } from "vitest";
import { add, divide, half, isEven, isOdd, multiply } from "../src/math.js";

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

describe("isEven", () => {
  it("returns true for even numbers", () => {
    expect(isEven(4)).toBe(true);
    expect(isEven(0)).toBe(true);
    expect(isEven(-2)).toBe(true);
  });

  it("returns false for odd numbers", () => {
    expect(isEven(3)).toBe(false);
    expect(isEven(-1)).toBe(false);
  });
});

describe("isOdd", () => {
  it("returns true for odd numbers", () => {
    expect(isOdd(3)).toBe(true);
    expect(isOdd(-1)).toBe(true);
  });

  it("returns false for even numbers", () => {
    expect(isOdd(4)).toBe(false);
    expect(isOdd(0)).toBe(false);
    expect(isOdd(-2)).toBe(false);
  });
});

describe("half", () => {
  it("halves a number", () => {
    expect(half(8)).toBe(4);
    expect(half(3)).toBe(1.5);
    expect(half(-6)).toBe(-3);
  });
});
