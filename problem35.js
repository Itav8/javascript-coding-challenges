/*
Given a string, write a function that replaces every letter with its position in the alphabet: 'a' = 1, 'b' = 2, ....
If anything in the input isn't a letter, ignore it and don't return it.
 */
// const alphabetPosition = (text) => {
//   // Your solution
//   const lowerText = text.toLowerCase()
//   const alphabet = 'abcdefghijklmnopqrstuvwxyz'
//   let result = ''

//   for (let i = 0; i < lowerText.length; i++) {
//     for (let j = 0; j < alphabet.length; j++) {
//       if (lowerText[i] === alphabet[j]) {
//         result += j + 1 + " "
//       }
//     }
//   }
//   return result.slice(0, result.length -1)
// };

const alphabetPosition = (text) => {
  // Your solution
  const lowerText = text.toLowerCase();
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  let result = "";

  for (let i = 0; i < lowerText.length; i++) {
    const position = alphabet.indexOf(lowerText[i]);
    if (position > -1) {
      result += position + 1 + " ";
    }

  }
  return result.slice(0, result.length - 1);
};

console.log(alphabetPosition("The narwhal bacons at midnight."));
// '20 8 5 14 1 18 23 8 1 12 2 1 3 15 14 19 1 20 13 9 4 14 9 7 8 20'

console.log(alphabetPosition("The sunset sets at twelve o' clock."));
// '20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11'
