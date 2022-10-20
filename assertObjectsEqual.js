const eqObjects = function(object1, object2) {

  let firstObjectKeys = Object.keys(object1);

  if (firstObjectKeys.length !== Object.keys(object2).length) {
    return false;
  }

  for (let key of firstObjectKeys) {
    if (Array.isArray(object1[key]) === true || Array.isArray(object2[key]) === true) {
      return eqArrays(object1[key], object2[key]);
    } else if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
};

const assertObjectsEqual = function(actual, expected) {

  const inspect = require('util').inspect;

  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }

};

const obj1 = {
  name: "Charles",
  age: 24,
}

const obj2 = {
  name: "Charles",
  age: 24,
}

const obj3 = {
  name: "Charles",
  age: 22
}

assertObjectsEqual(obj1, obj2);
assertObjectsEqual(obj1, obj3);