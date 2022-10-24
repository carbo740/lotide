const assertEqual = require('../assertEqual');

const assert = require('chai').assert;

describe("#assertEqual", () => {
  it("should return true", () => {
    assert.strictEqual(assertEqual(5, 5), true);
  });

  it("should return false", () => {
    assert.strictEqual(assertEqual(5, 10), false);
  });

});