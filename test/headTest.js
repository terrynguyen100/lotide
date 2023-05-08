const head = require('../head');
const assertEqual = require('../assertEqual');

// test code

assertEqual(head([5,6,7]), 5);
assertEqual(head([11,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([1]), 1);
assertEqual(head([]), 1);