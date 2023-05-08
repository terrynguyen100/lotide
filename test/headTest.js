const assertEqual = require('../assertEqual');
const assert = require('chai').assert;
const head   = require('../head');

// test code

// assertEqual(head([5,6,7]), 5);
// assertEqual(head([11,6,7]), 5);
// assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
// assertEqual(head([1]), 1);
// assertEqual(head([]), 1);
describe("head", () => {
  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });
  it("returns '5' for ['5']", () => {
    assert.strictEqual(head(['5']), '5'); 
  });
});