/*
Given a signed 32-bit integer x, return x with its digits reversed.
If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.
 */
const reverse = (x) => {
  // Your solution
  const max = Math.pow(2, 31) - 1;
  const min = -Math.pow(2, 31);
  const isNegative = x < 0;
  let reversed;
  const nums = String(x).split("");
  let result = [];

  for (let i = nums.length - 1; i >= 0; i--) {
    result.push(nums[i]);
  }

  if (isNegative) {
    reversed = -parseInt(result.join(''))
  } else {
    reversed = parseInt(result.join(''))
  }

  if (reversed > max || reversed < min) {
    return 0;
  }

  return reversed;

};

console.log(reverse(0)); // 0
console.log(reverse(120)); // 21
console.log(reverse(123)); // 321
console.log(reverse(-123)); // -321
console.log(reverse(1534236469)); // 0
