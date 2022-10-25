const eqArrays = function (array1, array2) {

  for(let i = 0; i < array1.length; i++){
    if(array1[i] !== array2[i]){
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function (array1, array2) {

  if (eqArrays(array1,array2)) {
    console.log(`✅✅✅ Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${array1} !== ${array2}`);
  }
};


const letterPositions = function (letters) {
  let output = {};

  for (let i = 0; i < letters.length; i++) {

    if (letters[i] !== " ") {
      if (typeof output[letters[i]] == "undefined") {
        output[letters[i]] = [i];
      } else {
        output[letters[i]].push(i);
      }
    }
  }
  return output;
};

assertArraysEqual(letterPositions("hello").e, [1]);

module.exports = letterPositions;