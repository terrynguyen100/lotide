const eqArrays = function(arrayOne, arrayTwo) {
  if (arrayOne.length !== arrayTwo.length)
    return false;
  for (let i = 0; i <= arrayOne.length; i++) {
    if (arrayOne[i] !== arrayTwo[i]) {
      return false;
    }
  }

  return true;
};

const assertArraysEqual = function(actual, expected) {
  
  let result = '';
  if (eqArrays(actual, expected)) {
    result = `\u{2705} Assertion Passed: ${actual} === ${expected}`;
  } else {
    result = `\u{274c} Assertion Failed: ${actual} !== ${expected}`;
  }
  console.log(result);
};


assertArraysEqual([1,2,3], ['a','b',3])
assertArraysEqual([1,2,3], [1,2,3])