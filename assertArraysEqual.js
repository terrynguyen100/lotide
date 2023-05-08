const eqArrays = require('./eqArrays');

const assertArraysEqual = function(actual, expected) {
  
  let result = '';
  if (eqArrays(actual, expected)) {
    result = `\u{2705} Assertion Passed: ${actual} === ${expected}`;
  } else {
    result = `\u{274c} Assertion Failed: ${actual} !== ${expected}`;
  }
  console.log(result);
};

module.exports = assertArraysEqual;
