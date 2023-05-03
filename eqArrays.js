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

console.log(eqArrays([1, 2, 3], [1, 2, 3]))

console.log(eqArrays([1, 2, 3], [3, 2, 1]))

console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"]))
 // => true

 console.log(eqArrays(["1", "2", "3"], ["1", "2", 3]))
  // => false