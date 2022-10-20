const map = (array, callback) => {
  const results = [];

  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const eqArrays = function(array1, array2) {

  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(array1, array2){

  if (eqArrays(array1,array2)) {
    console.log(`✅✅✅ Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${array1} !== ${array2}`);
  }
};



const words = ["ground", "control", "to", "major", "tom"];

const results1 = map(words, word => word[0]);
console.log(results1);

assertArraysEqual(map(words, word => word[word.length-1]), ["d", "l", "o", "r", "m"]);
assertArraysEqual(map(words, word => words.indexOf(word)), [0, 1, 2, 3, 4]);
assertArraysEqual(map(words, word => word = "Hello"), ["Hello", "Hello", "Hello", "Hello", "Hello"]);