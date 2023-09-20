/*
Given a word, your job is to return the middle character(s) of the word.
If the word's length is odd, return the middle character.
If the word's length is even, return the middle 2 characters.
*/
const getMiddle = str => {
  // Your solution
  const len = str.length
  const half = len / 2
  // console.log(half)

  if (len % 2 !== 0) {
    return str[Math.floor(half)]
  } else {
    return str[Math.floor(half) - 1] + str[Math.floor(half)]
  }
};

console.log(getMiddle('test')); // 'es'
console.log(getMiddle('testing')); // 't'
console.log(getMiddle('middle')); // 'dd'
console.log(getMiddle('A')); // 'A'
