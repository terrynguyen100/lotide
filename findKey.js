const assertEqual = function(actual, expected) {
  let result = '';
  if (actual === expected) {
    result = `\u{2705} Assertion Passed: ${actual} === ${expected}`;
  } else {
    result = `\u{274c} Assertion Failed: ${actual} !== ${expected}`;
  }
  console.log(result);
};

const findKey = function (object, callback) {
  for (let key of Object.keys(object)) {
    if (callback(object[key]))
      return key;
  }
  return 'no key match the condition was found in the object';
}


//Test case:
const result = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2) // => "noma"

console.log(result)