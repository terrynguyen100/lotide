const assertEqual = function(actual, expected) {
  let result = '';
  if (actual === expected) {
    result = `\u{2705} Assertion Passed: ${actual} === ${expected}`;
  } else {
    result = `\u{274c} Assertion Failed: ${actual} !== ${expected}`;
  }
  console.log(result);
};

const tail = function(myArray) {
  const tailArray = myArray.slice(1);
  return tailArray;
};

const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs"); // ensure second element is "Labs"
