const assertArraysEqual = function (array1, array2){

  if (eqArrays(array1,array2)) {
    console.log(`✅✅✅ Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${array1} !== ${array2}`);
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

const without = function(source, itemsToRemove){
  let filteredOutput = source.filter((a) => itemsToRemove.indexOf(a)<0);

  return filteredOutput;
};

assertArraysEqual(without([1, 3, 5], [3]), [1, 5]);
assertArraysEqual(without([1, 3, 5], ["3"]), [1, 5]);
assertArraysEqual(without([1, 2, 3], [5]), [1, 2, 3]);

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]);
assertArraysEqual(words, ["hello", "world", "lighthouse"]);