/*
Given an array of numbers, write a function that returns the sum of all of the positives ones.
If the array is empty, the sum should be 0.
*/
const positiveSum = arr => {
  // Your solution
  let total = 0
  for (const num of arr) {
    if (num > 0) {
      total += num
    }
  }
  return total
};

console.log(positiveSum([1, 2, 3, 4, 5])); // 15
console.log(positiveSum([1, -2, 3, 4, 5])); // 13
console.log(positiveSum([-1, 2, 3, 4, -5])); // 9
console.log(positiveSum([-1, -2, -3, -4, -5])); // 0
console.log(positiveSum([])); // 0
