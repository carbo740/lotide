const tail = function(input) {

  let newArray = [];

  if (input.length >= 1) {
    newArray = input.slice(1,input.length);
    return newArray;
  } else {
    return newArray;
  }
};

module.exports = tail;