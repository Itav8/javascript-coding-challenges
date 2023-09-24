/*
DNA is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.
In DNA strings, symbols "A" and "T" are complements of each other, as are "C" and "G".
Given one side of the DNA, write a function that returns the other complementary side. The DNA strand is never empty.
*/
const DNAStrand = dna => {
  // Your solution
  let newDNA = ''

  for (const char of dna) {
    if (char === "A") {
      newDNA += "T"
    } else if (char === "C") {
      newDNA += "G"
    } else if (char === "T") {
      newDNA += "A"
    } else {
      newDNA += "C"
    }
  }

  return newDNA
};

console.log(DNAStrand('AAAA')); // 'TTTT'
console.log(DNAStrand('ATTGC')); // 'TAACG'
console.log(DNAStrand('GTAT')); // 'CATA'
