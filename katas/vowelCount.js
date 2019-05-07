// vowelCount('hello world'); // returns {a: 0, e: 1, i: 0 o: 2, u: 0}
function vowelCount(str) {
  const arr = str.toLowerCase().split("");
  const vowels = ["a", "e", "i", "o", "u"];
  const newArr = arr.filter(letter => vowels.includes(letter));
  return newArr.reduce(
    (accumulator, currentValue) => {
      accumulator[currentValue] = accumulator[currentValue] || 0 + 1;
      return accumulator;
    },
    { a: 0, e: 0, i: 0, o: 0, u: 0 }
  );
}

console.log(vowelCount("A"));
module.exports = vowelCount;

/* function vowelCount(str) {
  const arr = str.toLowerCase().split("");
  const vowels = ["a", "e", "i", "o", "u"];
  const newArr = arr.filter(letter => vowels.includes(letter));
  return newArr.reduce(
    (accumulator, currentValue) => {
      accumulator[currentValue] = (accumulator[currentValue] || 0) + 1;
      return accumulator;
    },
    { a: 0, e: 0, i: 0, o: 0, u: 0 }
  );
}*/
