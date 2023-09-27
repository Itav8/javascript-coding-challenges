/*
Write a function that accepts two strings and returns true if some or all of the characters in the first string can be rearranged to match the second string.
*/
const scramble = (str1, str2) => {
  // Your solution
  const tracker = {};

  for (const char of str1) {
    tracker[char] = (tracker[char] ?? 0) + 1;
  }

  console.log(tracker);

  for (const letter of str2) {
    if (!tracker[letter] || tracker[letter] < 0) {
      console.log(tracker)
      return false;
    }
    tracker[letter]--;
  }
  return true;
};

console.log(scramble("scriptjava", "javascript")); // true
console.log(scramble("scriptingjava", "javascript")); // true
console.log(scramble("scriptsjava", "javascripts")); // true
console.log(scramble("jscripts", "javascript")); // false
console.log(scramble("javscripts", "javascript")); // false
