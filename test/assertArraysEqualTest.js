const assertArraysEqual = require('../assertArraysEqual');

const assert = require('chai').assert;

describe("#assertArraysEqual", () => {
  it("returns false for [1, 5, 3], [1 ,2 ,3]", () => {
    assert.strictEqual(assertArraysEqual([1, 5, 3], [1 ,2 ,3]), false);
  });

  it("returns true for [1, 2, 3], [1, 2, 3]", () => {
    assert.strictEqual(assertArraysEqual([1, 2, 3], [1 ,2 ,3]), true);
  })
});

// assertArraysEqual([1,5,3],[1,2,3]);
// assertArraysEqual([1,2,3],[1,2,3]);