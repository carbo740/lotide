const assertArraysEqual = function(array1, array2) {

  if (eqArrays(array1,array2)) {
    console.log(`✅✅✅ Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${array1} !== ${array2}`);
  }
};

const eqArrays = function(array1, array2) {

  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

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

assertArraysEqual(middle([1,2,3,4,5]), [3]);
assertArraysEqual(middle([2,3,4,5]), [2,4]);
assertArraysEqual(middle([1,2]), []);

console.log(middle([1,2,3,4,5]));
console.log(middle([1,2,3,4]));
console.log(middle([1,2]));
