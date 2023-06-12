const assertQrraysEqual = require('./assertArraysEqual');
const eqArrays = require('./eqArrays');

const flatten = function (myArray) {
  const result = [];
  for (const element of myArray) {
    if (Array.isArray(element)) {
      for (const childElement of element) {
        result.push(childElement);
      }
    } else {
      result.push(element);
    }
  }
  return result;
};


console.log(flatten([1, 2, [3, 4], 5, [6]]));