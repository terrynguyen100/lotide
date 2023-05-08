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


const without = function (source, itemsToRemove) {
  let result = [];

  for (let element of source)
    if (!itemsToRemove.includes(element))
      result.push(element);
      
  return result;
}

//test case
console.log(without([1, 2, 3], [1]));
// => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])) ;
// => ["1", "2"]