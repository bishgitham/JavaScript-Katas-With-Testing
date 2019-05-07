/*
Write a higher-order function called `invert`.
It should do the following:

- It should return a new function.
- It should take a function as its only argument.
- The inner function should take any number of arguments and inverts a call to the passed function 

You are also expected to use TDD
*/

function invert(func) {
  return function(...arguments) {
    return !func(arguments);
  };
}

module.exports = invert;
