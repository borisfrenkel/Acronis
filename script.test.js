const merge = require("./script.js");

test("test merge", () => {
  var iterable1 = [1, 5, 9];
  var iterable2 = [2, 5];
  var iterable3 = [1, 6, 10, 11];
  expect(merge(iterable1, iterable2, iterable3).length).toBe(9);
});
