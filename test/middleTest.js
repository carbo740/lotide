const middle = require('../middle');
const assertArraysEqual = require('../assertArraysEqual');

const assert = require('chai').assert;

describe("#middle", () => {
  it("should return true", () => {
    assert.strictEqual(assertArraysEqual(middle([1,2,3,4,5]), [3]), true);
  });

  it("should return false", () => {
    assert.strictEqual(assertArraysEqual(middle([2,3,4,5]), [2,4]), false);
  });

  it("should return true", () => {
    assert.strictEqual(assertArraysEqual(middle([1, 2]), []), true);
  });

});

