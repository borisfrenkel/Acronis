function merge() {
  var iterable = [];
  for (var i = 0; i < arguments.length; i++) {
    iterable = iterable.concat(arguments[i]);
  }

  return iterable.sort(function (a, b) {
    return a - b;
  });
}

module.exports = merge;
