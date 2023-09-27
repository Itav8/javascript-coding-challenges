/*
Write a function that counts the frequency of all the characters in a given string.
*/
const count = string => {
  // Your solution
  const output = {}
  for (let char of string) {
    if (char in output) {
      output[char]++
    } else {
      output[char] = 1
    }
  }
  return output
};

console.log(count('')); // {}
console.log(count('aba')); // { a: 2, b: 1 }
