const eqArrays = require('../eqArrays');


//test code
console.log('compare between [1, 2, 3], [1, 2, 3]')
console.log(eqArrays([1, 2, 3], [1, 2, 3]))
//true

console.log('compare between [1, 2, 3], [3, 2, 1]')
console.log(eqArrays([1, 2, 3], [3, 2, 1]))
//false

console.log('compare between ["1", "2", "3"], ["1", "2", "3"]')
console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"]))
 // => true

 console.log('compare between ["1", "2", "3"], ["1", "2", 3]')
 console.log(eqArrays(["1", "2", "3"], ["1", "2", 3]))
  // => false