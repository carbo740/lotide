const head = function(input) {
  if (input.length >= 1) {
    return input[0];
  } else {
    return undefined;
  }
};

module.exports = head;