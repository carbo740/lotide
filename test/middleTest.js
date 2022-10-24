const middle = require('../middle');
const assert = require('chai').assert;

describe("#middle", () => {
  it("should return true", () => {
    assert.deepEqual(middle([1,2,3,4,5]), [3]);
  });

  it("should return false", () => {
    assert.deepEqual(middle([2,3,4,5]), [3,4]);
  });

  it("should return true", () => {
    assert.deepEqual(middle([1, 2]), []);
  });

});

