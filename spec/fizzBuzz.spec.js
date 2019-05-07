const { expect } = require("chai");
const fizzBuzz = require("../katas/fizzBuzz");

describe("fizzBuzz", () => {
  it("returns zero when numbers below passed numbers are not divisble by 3 or 5", () => {
    expect(fizzBuzz(2)).to.eql(0);
  });
  it("summs up the numbers divisible by 3 or 5 when passed a certain number", () => {
    expect(fizzBuzz(4)).to.eql(3);
  });
  it("checks if the numbers are divisible by either 3 or 5 and adds up below certain number", () => {
    expect(fizzBuzz(6)).to.eql(8);
    expect(fizzBuzz(20)).to.eql(78);
    expect(fizzBuzz(123)).to.eql(3420);
  });
  it("Edge Case Testing: returns zero when passed string or boolean", () => {
    expect(fizzBuzz("ten")).to.eql(0);
    expect(fizzBuzz(true)).to.eql(0);
  });
});
