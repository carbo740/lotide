const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(array1, array2){

  for(let i = 0; i < array1.length; i++){
    if(array1[i] !== array2[i]){
      return false;
    }
  }
  return true;
};

assertEqual(eqArrays([1, 2, 5], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 3], [1, 2, 5]), false);
assertEqual(eqArrays([1, 2, 10], [1, 2, 10]), true);