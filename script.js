function merge() {
  var iterable = [];
  for (var i = 0; i < arguments.length; i++) {
    iterable = iterable.concat(arguments[i]);
  }

  return iterable.sort(function (firstArg, secondArg) {
    return firstArg - secondArg;
  });
}

module.exports = merge;
