const assertEqual = function(actual, expected) {
  let result = '';
  if (actual === expected) {
    result = `\u{2705} Assertion Passed: ${actual} === ${expected}`;
  } else {
    result = `\u{274c} Assertion Failed: ${actual} !== ${expected}`;
  }
  console.log(result);
};

const countLetters = function (myString) {
  const result = {};

  for (let letter of myString) {
    if (result[letter]) {
      result[letter] += 1;
    } else
      result[letter] = 1;
  }

  return result;
}

console.log(countLetters('aaabcccdd'));