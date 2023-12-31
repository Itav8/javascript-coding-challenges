/*
Given an array of integers nums and an integer target, return indices of the two numbers in the array such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
 */
const twoSum = (nums, target) => {
  // Your solution
  const results = []

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        results.push(i, j)
      }
    }
  }
  return results
};

console.log(twoSum([2, 7, 11, 15], 9)); // [0, 1]
console.log(twoSum([3, 2, 4], 6)); // [1, 2]
