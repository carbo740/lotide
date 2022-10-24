const assertArraysEqual = require('./assertArraysEqual');
const eqArrays = require('./eqArrays');

const middle = function(array) {
  let result = [];

  if (array.length <= 2) {
    return result;

  } else if (array.length % 2 === 1) {
    let middleIndex = Math.floor(array.length / 2);

    result.push(array[middleIndex]);
  } else if (array.length % 2 === 0) {
    result.push(array[array.length / 2 - 1]);
    result.push(array[array.length / 2]);
  }
  return result;
};

module.exports = middle;

