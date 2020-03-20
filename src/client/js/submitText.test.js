import { handleUserTextInput } from "./submitText";

test("It should return true", async () => {
  expect(handleUserTextInput).toBeDefined();
});

test("It should be a function", async () => {
  expect(typeof handleUserTextInput).toBe("function");
});
