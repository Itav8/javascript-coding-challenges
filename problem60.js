/*
Given an integer array nums, move all 0's in the array to the end of it while maintaining the relative order of the non-zero elements.
Achieve this without copying the array or creating a new array.
*/
const moveZeroes = nums => {
  // Your solution
  let nonZeroIndex = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[nonZeroIndex] = nums[i];
      nonZeroIndex++;
    }
  }

  for (let i = nonZeroIndex; i < nums.length; i++) {
    nums[i] = 0;
  }

  return nums;

};

console.log(moveZeroes([0, 1, 0, 3, 12])); // [1, 3, 12, 0, 0]
console.log(moveZeroes([0, 0, 1])); // [1, 0, 0]
console.log(moveZeroes([0])); // [0]
