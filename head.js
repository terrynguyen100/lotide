const assertEqual = function(actual, expected) {
  let result = '';
  if (actual === expected) {
    result = `\u{2705} Assertion Passed: ${actual} === ${expected}`;
  } else {
    result = `\u{274c} Assertion Failed: ${actual} !== ${expected}`;
  }
  console.log(result);
};

const head = function(array) {
  return array[0];
};

assertEqual(head([5,6,7]), 5);
assertEqual(head([11,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([1]), 1);
assertEqual(head([]), 1);