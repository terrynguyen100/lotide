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

const middle = function(myArray) {
  let result = [];
  if (myArray.length < 3)
    return result;
  
  //array contain odd number of elements
  if (myArray.length % 2 != 0) {
    result.push(myArray[(myArray.length - 1) / 2]);
    return result;
  }

  //array contains even number of elements
  result.push(myArray[myArray.length/2 - 1]);
  result.push(myArray[myArray.length/2]);
  return result;
}
console.log(middle([1]))
console.log(middle([1, 2]))
console.log(middle([1, 2, 3]))
console.log(middle([1, 2, 3, 4, 5]))
console.log(middle([1, 2, 3, 4]) )
console.log(middle([1, 2, 3, 4, 5, 6]))
