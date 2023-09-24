/*
Write a function that converts a string to a new string where each character in the new string is ( if that character appears only once in the original string, or ) if that character appears more than once in the original string.
Ignore capitalization when determining if a character is a duplicate.
*/
const duplicateEncode = word => {
  // Your solution
  const lowerWord = word.toLowerCase()
  let result = ''

  for (const char of lowerWord) {
    if (lowerWord.indexOf(char) !== lowerWord.lastIndexOf(char)) {
      result += ')'
    } else {
      result += '('
    }
  }
  return result
};


console.log(duplicateEncode("din")); // '((('
console.log(duplicateEncode("(( @")); // '))(('
console.log(duplicateEncode("recede")); // '()()()'
console.log(duplicateEncode("Success")); // ')())())'
