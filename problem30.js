/*
Write a function that will return the count of distinct case-insensitive alphanumeric characters that occur more than once in the input string.


*/
const duplicateCount = text => {
  // Your solution
};

console.log(duplicateCount('')); // 0
console.log(duplicateCount('abcde')); // 0
console.log(duplicateCount('abA11')); // 2
console.log(duplicateCount('aabbcde')); // 2
console.log(duplicateCount('aabBcde')); // 2
console.log(duplicateCount('Indivisibility')); // 1
console.log(duplicateCount('Indivisibilities')); // 2
