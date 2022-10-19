const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(letters) {
  let output = {};

  for (const letter of letters) {
    if (typeof output[letter] == "undefined") {
      output[letter] = 1;
    } else {
      output[letter] = output[letter] + 1;
    }
  }

  return output;
};

console.log(countLetters("hellooo world"));
