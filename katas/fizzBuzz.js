function fizzBuzz(num) {
  const arr = Array.from(Array(num).keys());
  //   const filteredArr = arr.filter(item => item % 3 === 0 || item % 5 == 0);
  return arr.reduce((accumulator, currentValue) => {
    if (currentValue % 3 === 0 || currentValue % 5 == 0) {
      accumulator = accumulator + currentValue;
    }
    return accumulator;
  });
}

module.exports = fizzBuzz;
