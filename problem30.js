/*
Write a function that will return the count of distinct case-insensitive alphanumeric characters that occur more than once in the input string.
*/
const duplicateCount = text => {
  // Your solution
  const lowerText = text.toLowerCase()
  const tracker = {}

  for (const char of lowerText) {
    if (char in tracker) {
      tracker[char]++
    } else {
      tracker[char] = 1
    }
  }

  let total = 0
  for (let char in tracker) {
    if (tracker[char] > 1) {
      total++
    }
  }
  return total
};

console.log(duplicateCount('')); // 0
console.log(duplicateCount('abcde')); // 0
console.log(duplicateCount('abA11')); // 2
console.log(duplicateCount('aabbcde')); // 2
console.log(duplicateCount('aabBcde')); // 2
console.log(duplicateCount('Indivisibility')); // 1
console.log(duplicateCount('Indivisibilities')); // 2
