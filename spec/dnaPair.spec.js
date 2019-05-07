const { expect } = require("chai");
const dnaPair = require("../katas/dnaPair");

describe("dnaPair", () => {
  it("returns empty array when passed an empty string", () => {
    expect(dnaPair("")).to.eql([]);
  });

  it("returns nested array of DNA pair when passed a single DNA string ", () => {
    expect(dnaPair("A")).to.eql([["A", "T"]]);
    expect(dnaPair("T")).to.eql([["T", "A"]]);
    expect(dnaPair("G")).to.eql([["G", "C"]]);
    expect(dnaPair("C")).to.eql([["C", "G"]]);
  });

  it("returns nested array of DNA pair ", () => {
    expect(dnaPair("TA")).to.eql([["T", "A"], ["A", "T"]]);
    expect(dnaPair("AT")).to.eql([["A", "T"], ["T", "A"]]);
    expect(dnaPair("CG")).to.eql([["C", "G"], ["G", "C"]]);
    expect(dnaPair("GC")).to.eql([["G", "C"], ["C", "G"]]);
  });

  it("returns returns DNA pair in nested arrays ", () => {
    expect(dnaPair("TG")).to.eql([["T", "A"], ["G", "C"]]);
    expect(dnaPair("CA")).to.eql([["C", "G"], ["A", "T"]]);
    expect(dnaPair("CAT")).to.eql([["C", "G"], ["A", "T"], ["T", "A"]]);
    expect(dnaPair("CATG")).to.eql([
      ["C", "G"],
      ["A", "T"],
      ["T", "A"],
      ["G", "C"]
    ]);
  });
});
