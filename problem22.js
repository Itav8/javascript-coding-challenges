/*
Check to see if a string has the same amount of 'x's and 'o's.
The method must return a boolean and be case insensitive.
The input string can contain any character.
*/
// const XO = str => {
//   // Your solution
//   const lowerStr = str.toLowerCase()
//   const counter = {}

//   if (!(lowerStr.includes("x")) && !(lowerStr.includes("o"))) return true

//     for (const char of lowerStr) {
//       if (!(char in counter)) {
//         counter[char] = 1;
//       } else {
//         counter[char]++;
//       }
//     }

//   return counter.x === counter.o
// };


const XO = (str) => {
  // Your solution
  const lowerStr = str.toLowerCase();
  let x = 0
  let o = 0

  if (!lowerStr.includes("x") && !lowerStr.includes("o")) return true;

  for (const char of lowerStr) {
    if (char === "x") {
      x++
    } else if (char === "o") {
      o++
    }
  }

  return x === o;
};

console.log(XO('xo')); // true
console.log(XO('Oo')); // false
console.log(XO('xxOo')); // true
console.log(XO('xxxm')); // false
console.log(XO('ooom')); // false
console.log(XO('ty')); // true (when no 'x' and 'o' is present should return true)
