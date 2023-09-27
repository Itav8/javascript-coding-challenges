/*
A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward.
Alphanumeric characters include letters and numbers.
Given a string s, return true if it is a palindrome, or false otherwise.
*/
const isPalindrome = (s) => {
  // Your solution
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const lowerStr = s.toLowerCase();
  let i = 0;
  let j = lowerStr.length - 1;

  while (i < j) {
    if (!alphabet.includes(lowerStr[i])) {
      i++;
      continue;
    }
    if (!alphabet.includes(lowerStr[j])) {
      j--;
      continue;
    }
    if (lowerStr[i] !== lowerStr[j]) {
      return false;
    }
    i++;
    j--;
  }

  return true;
};

console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
// Explanation: "amanaplanacanalpanama" is a palindrome.
console.log(isPalindrome("race a car")); // false
// Explanation: "raceacar" is not a palindrome.
console.log(isPalindrome("ab_a")); // true
// Explanation: "aba" is a palindrome.
console.log(isPalindrome(" ")); // true
// Explanation: `s` is an empty string "" after removing non-alphanumeric characters.
// Since an empty string reads the same forward and backward, it is a palindrome.
