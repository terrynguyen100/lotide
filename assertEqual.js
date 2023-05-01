const assertEqual = function(actual, expected) {
  let result = '';
  if (actual === expected) {
    result = `\u{2705} Assertion Passed: ${actual} === ${expected}`;
  } else {
    result = `\u{274c} Assertion Failed: ${actual} !== ${expected}`;
  }
  console.log(result);
};

assertEqual('Lighthouse Labs', 'Bootcamp');
assertEqual(1,1);