/*
Write a function that accepts two strings and returns true if some or all of the characters in the first string can be rearranged to match the second string.


*/
const scramble = (str1, str2) => {
  // Your solution
};

console.log(scramble('scriptjava', 'javascript')); // true
console.log(scramble('scriptingjava', 'javascript')); // true
console.log(scramble('scriptsjava', 'javascripts')); // true
console.log(scramble('jscripts', 'javascript')); // false
console.log(scramble('javscripts', 'javascript')); // false
