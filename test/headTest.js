const head = require('../head');
const assertEqual = require('../assertEqual');

assertEqual(head([1, 2, 3]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
  