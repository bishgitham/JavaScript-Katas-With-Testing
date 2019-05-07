const { expect } = require("chai");
const vowelCount = require("../katas/vowelCount");

describe("vowelCount", () => {
  it("returns an object with 5 vowel alphabets as key when passed an empty string", () => {
    const actual = vowelCount("");
    const expected = { a: 0, e: 0, i: 0, o: 0, u: 0 };
    expect(actual).to.eql(expected);
  });

  it("counts the vowels in a string and returns as value in object", () => {
    const expected = { a: 1, e: 0, i: 0, o: 0, u: 0 };
    expect(vowelCount("a")).to.eql(expected);
  });

  it("counts the vowels in a string and returns as value in object", () => {
    const expected = { a: 1, e: 1, i: 0, o: 0, u: 0 };
    expect(vowelCount("abcde")).to.eql(expected);
  });

  it("ignrose all the consoants and returns default object", () => {
    const expected = { a: 0, e: 0, i: 0, o: 0, u: 0 };
    expect(vowelCount("bcdfgh klmn pqrst")).to.eql(expected);
  });

  it("validates both the upper and lowercase letters", () => {
    const expected = { a: 1, e: 0, i: 0, o: 0, u: 0 };
    expect(vowelCount("A")).to.eql(expected);
  });

  it("returns object with vowels as key and adds up its numbers on value", () => {
    const expected = { a: 1, e: 0, i: 1, o: 1, u: 1 };
    expect(vowelCount("you can win")).to.eql(expected);
  });
});
