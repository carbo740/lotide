const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const head = function(input) {
  if (input.length >= 1) {
    return input[0];
  } else {
    return undefined;
  }
};

assertEqual(head([1, 2, 3]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");