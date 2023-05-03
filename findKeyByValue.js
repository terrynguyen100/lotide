const assertEqual = function(actual, expected) {
  let result = '';
  if (actual === expected) {
    result = `\u{2705} Assertion Passed: ${actual} === ${expected}`;
  } else {
    result = `\u{274c} Assertion Failed: ${actual} !== ${expected}`;
  }
  console.log(result);
};

const findKeyByValue = function(myObject, myValue) {
  let result;
  for (let key in myObject) {
    if (myObject[key] === myValue) {
      result = key;
      return result;
    }
  }
  return result;
}

//Test case
const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);