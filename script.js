function merge() {
  var iterable = [];
  for (var i = 0; i < arguments.length; i++) {
    iterable = iterable.concat(arguments[i]);
  }

  return iterable.sort();
}

var iterable1 = [1, 5, 9];
var iterable2 = [2, 5];
var iterable3 = [1, 6, 10, 11];
console.log(merge(iterable1, iterable2, iterable3));
