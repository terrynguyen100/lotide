const assertEqual = function(actual, expected) {
  let result = '';
  if (actual === expected) {
    result = `\u{2705} Assertion Passed: ${actual} === ${expected}`;
  } else {
    result = `\u{274c} Assertion Failed: ${actual} !== ${expected}`;
  }
  console.log(result);
};
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

const eqObjects = function (object1, object2) {
  let object1Keys = Object.keys(object1);
  let object2Keys = Object.keys(object2);
  //checking length of arrays of number of keys
  if (object1Keys.length != object2Keys.length)
    return false;
  //check value of each key
  for (let key of object1Keys) {
    if (Array.isArray(object1[key])) {
      if (!eqArrays(object1[key], object2[key]))
        return false;
    } else {
        if (object1[key] !== object2[key])
          return false
    }
  }
  return true;
}

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;

  let result = '';
  if (eqObjects(actual, expected)) {
    result = `\u{2705} Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`;
  } else {
    result = `\u{274c} Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`;
  }
  console.log(result);
}


object1 = {
  name: "Apple",
  count: 5
}

object2 = {
  name: "Apple",
  count: 5
}

object3 = {
  name: "Mango",
  count:5
}

assertObjectsEqual(object1, object2);
assertObjectsEqual(object1, object3);