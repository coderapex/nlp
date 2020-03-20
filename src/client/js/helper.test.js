import { trim } from "./helper";
import { titleCase } from "./helper";

// tests for trim function
test("trims decimal places to specified number", () => {
  expect(trim(1.2536, 2)).toBe(1.25);
});

test("trims decimal places to default 2 places", () => {
  expect(trim(1.2536)).toBe(1.25);
});

// tests for title case function
test("titleCase a single word", () => {
  expect(titleCase("hello")).toBe("Hello");
});

test("titleCase a sentence", () => {
  expect(titleCase("hello there")).toBe("Hello There");
});
