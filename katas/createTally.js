/*
Using the appropriate array method, write a function that creates a tally object for arrays.
You are expected to use full TDD 
*/

createTally(["cake", "biscuit", "biscuit"]); // returns {cake: 1, biscuit: 2}
createTally(["dog", "dog", "dog"]); // returns {dog: 3}

function createTally(arr) {
  return arr.reduce((accumulator, currentValue) => {
    accumulator[currentValue] = (accumulator[currentValue] || 0) + 1;
    return accumulator;
  }, {});
}

module.exports = createTally;
