const { expect } = require("chai");
const createTally = require("../katas/createTally");

describe("createTally", () => {
  it("returns empty object when passed an empy array", () => {});
  expect(createTally([])).to.eql({});

  /*it("returns empty object when passed an array with empty items", () => {});
  expect(createTally([""])).to.eql({});

  // it("Ignores empty object when passed an array with empty items", () => {});
  // expect(createTally(["", "apple", ""])).to.eql({ apple: 1 });*/

  it("returns objects from given array keys as array elements", () => {});
  expect(createTally(["apple"])).to.eql({ apple: 1 });

  it("returns object where given array's elements are presented in object numeric values", () => {});
  expect(createTally(["apple", "apple"])).to.eql({ apple: 2 });

  it("creates a tally object from given array", () => {});
  const array = ["apple", "orange", "orange", "lemon", "apple", "apple"];
  const expected = { apple: 3, orange: 2, lemon: 1 };
  const actual = createTally(array);
  expect(actual).to.eql(expected);
});
