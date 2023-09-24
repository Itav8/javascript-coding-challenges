/*
Given a sorted array nums, write a function that removes the duplicates in-place such that each element appears only once and returns the new length.
Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.
*/
// const removeDuplicates = nums => {
//   // Your solution
//   const unique = {}

//   for (let num of nums) {
//     if (!(num in unique)) {
//       unique[num] = 1
//     }
//   }

//   const result = []
//   for (let num in unique) {
//     result.push(num)
//   }
//   return result.length
// };

// const removeDuplicates = (nums) => {
//   // Your solution
//   const output =  nums.reduce((accum, current) => {
//     if (!accum.includes(current)) {
//       accum.push(current)
//     }
//     return accum
//   }, [])
//   return output.length
// };

const removeDuplicates = (nums) => {
  // Your solution
  let i = 0;

  while (i < nums.length - 1) {
    if (nums[i] === nums[i + 1]) {
      nums.splice(i + 1, 1);
    } else {
      i++;
    }
  }
  return nums.length;
};

console.log(removeDuplicates([1, 1, 2])); // 2 (because [1, 2] has length 2)
console.log(removeDuplicates([0, 1, 1, 1, 2, 2, 3, 3, 4])); // 5
// [0, 1, 1, 2, 2, 3, 3, 4] //i = 2
console.log(removeDuplicates([])); // 0
