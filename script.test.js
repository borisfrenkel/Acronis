const merge = require("./script.js");

var posIterable1 = [1, 5, 9];
var posIterable2 = [2, 5];
var posIterable3 = [1, 6, 10, 11];
var miscIterable1 = [-1, -25, 22, 9];
var miscIterable2 = [-344, 55];
var miscIterable3 = [1, 6, -10, -11];

test("merge - test positive numbers", () => {
  var mergeResult = merge(posIterable1, posIterable2, posIterable3);
  expect(mergeResult.length).toBe(9);
  expect(mergeResult).toStrictEqual([1, 1, 2, 5, 5, 6, 9, 10, 11]);
});

test("merge - test misc numbers", () => {
  var mergeResult = merge(miscIterable1, miscIterable2, miscIterable3);
  expect(mergeResult.length).toBe(10);
  expect(mergeResult).toStrictEqual([-344, -25, -11, -10, -1, 1, 6, 9, 22, 55]);
});
