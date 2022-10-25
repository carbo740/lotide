# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @carbo740/lotide`

**Require it:**

`const _ = require('@carbo740/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual`: asserts if two arrays are equal
* `assertEqual`: asserts if two values are equal
* `assertObjetsEqual`: asserts if two objects are equal
* `countLetters`: counts the letters in a string and returns it as an object
* `countOnly`: counts whatever the user wants from a list of items
* `eqArrays`: checks if two arrays are equal
* `eqObjects`: checks if two objects are equal
* `findKey`: finds a key in an object
* `findKeyByValue`: finds a key based on its value
* `head`: returns the first index of an array
* `tail;`: returns everything but the first index of an array
* `letterPositions`: returns the positions of all the letters in a string
* `map`: changes the value of all the elements in the array based on the function executed
* `middle`: returns the middle element in an array
* `takeUntil`: returns an array based on what value to remove
* `without`: removes all elements from array based element