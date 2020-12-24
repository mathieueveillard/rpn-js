import { rpn } from ".";

it("should compute a simple addition", function () {
  expect(rpn([0, 1, "+"])).toEqual(1);
});

it("should compute a simple addition", function () {
  expect(rpn([1, 1, "+"])).toEqual(2);
});

it("should compute a simple substraction", function () {
  expect(rpn([0, 1, "-"])).toEqual(-1);
});

it("should compute a simple multiplication", function () {
  expect(rpn([1, 2, "*"])).toEqual(2);
});

it("should compute a simple division", function () {
  expect(rpn([1, 2, "/"])).toEqual(0.5);
});

it("should compute 1 2 + 2 *", function () {
  expect(rpn([1, 2, "+", 2, "*"])).toEqual(6);
});

it("should compute 2 1 2 + * (control)", function () {
  expect(rpn([2, 1, 2, "+", "*"])).toEqual(6);
});

it("should compute 1 2 + -", function () {
  expect(rpn([1, 2, "+", "-"])).toEqual(-3);
});
