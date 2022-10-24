const eqArrays = require('../eqArrays');
const assert = require('chai').assert;

describe("#eqArrays", () => {
  it("should return false", () => {
    assert.strictEqual(eqArrays([1, 2, 5], [1, 2, 3]), false);
  });

  it("should return false", () => {
    assert.strictEqual(eqArrays([1, 2, 3], [1, 2, 5]), false);
  });

  it("should return false", () => {
    assert.strictEqual(eqArrays([1, 2, 10], [1, 2, 10]), true);
  });

});
