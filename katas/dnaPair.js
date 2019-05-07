/*```javascript
    dnaPair("G");
    // -> [ ["G", "C"] ]
``````javascript
    dnaPair("AG");
    // -> [ ["A", "T"], ["G", "C"] ]
``````javascript
    dnaPair("ATAG");
    // -> [ ["A", "T"], ["T", "A"], ["A", "T"], ["G", "C"] ]
 */

function dnaPair(dna) {
  const dnaArr = dna.split("");
  return dnaArr.reduce((accum, currentV) => {
    if (currentV === "A") {
      accum.push(["A", "T"]);
    } else if (currentV === "T") {
      accum.push(["T", "A"]);
    } else if (currentV === "G") {
      accum.push(["G", "C"]);
    } else if (currentV === "C") {
      accum.push(["C", "G"]);
    }
    return accum;
  }, []);
}

module.exports = dnaPair;
