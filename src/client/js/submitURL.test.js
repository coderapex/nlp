import { handleUserURLInput } from "./submitURL";

test("It should return true", async () => {
  expect(handleUserURLInput).toBeDefined();
});

test("It should be a function", async () => {
  expect(typeof handleUserURLInput).toBe("function");
});
