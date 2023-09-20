/*
*/
const isPalindrome = s => {
  // Your solution
};

console.log(isPalindrome('A man, a plan, a canal: Panama')); // true
// Explanation: "amanaplanacanalpanama" is a palindrome.
console.log(isPalindrome('race a car')); // false
// Explanation: "raceacar" is not a palindrome.
console.log(isPalindrome('ab_a')); // true
// Explanation: "aba" is a palindrome.
console.log(isPalindrome(' ')); // true
// Explanation: `s` is an empty string "" after removing non-alphanumeric characters.
// Since an empty string reads the same forward and backward, it is a palindrome.
