const tail = require('../tail');
const assert = require('chai').assert;

describe("#tail", () => {
  it("should return true for all", () => {
    const result = tail(["Hello", "Lighthouse", "Labs"]);
    assert.strictEqual(result.length, 2); // ensure we get back two elements
    assert.strictEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
    assert.strictEqual(result[1], "Labs"); // ensure second element is "Labs"
  });

  it("should return false", () => {
    const words = ["Yo Yo", "Lighthouse", "Labs"];

    assert.strictEqual(tail(words).length, 2);
  });

});
