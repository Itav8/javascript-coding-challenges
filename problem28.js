/*
An isogram is a word that has no repeating letters, consecutive or non-consecutive.
Implement a function that determines whether a string that contains only letters is an isogram.
Assume the empty string is an isogram.
Ignore letter case.
*/
const isIsogram = str => {
  // Your solution
  const strArr = str.toLowerCase()
  const tracker = {}

  for (const char of strArr) {
    if (char in tracker) {
      tracker[char]++
    } else {
      tracker[char] = 1
    }
  }
  // console.log(tracker)

  for (let char in tracker) {
    if (tracker[char] > 1) {
      return false
    }
  }
  return true
};

console.log(isIsogram('Dermatoglyphics')); // true
console.log(isIsogram('isIsogram')); // false
console.log(isIsogram('isogram')); // true
console.log(isIsogram('moOse')); // false
console.log(isIsogram('aba')); // false
console.log(isIsogram('')); // true
