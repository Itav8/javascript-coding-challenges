/*
Let's assume that the numeric value of a letter is its position in the alphabet starting from 0 (i.e. a -> 0, b -> 1, c -> 2, etc.). Similarly, the numerical value of a string str consisting of some lowercase English letters is the concatenation (not sum!) of the numeric values of each letter in str, which is then converted into an integer. For example, if str = 'acb', we concatenate each letter's numeric value, resulting in 021 which is then converted to integer 21.


You are given three strings firstWord, secondWord, and targetWord, each consisting of lowercase English letters a through j inclusive. Write a function that returns true if the sum of the numerical values of firstWord and secondWord equals the numerical value of targetWord.


*/
const isSumEqual = (firstWord, secondWord, targetWord) => {
  // Your solution
};

console.log(isSumEqual('acb', 'cba', 'cdb')); // true
// The numerical value of firstWord 'acb' is '021' -> 21
// The numerical value of secondWord 'cba' is '210' -> 210
// The numerical value of targetWord 'cdb' is '231' -> 231
// So we return true because 21 + 210 == 231

console.log(isSumEqual('aaa', 'a', 'aab')); // false
// The numerical value of firstWord 'aaa' is '000' -> 0
// The numerical value of secondWord 'a' is '0' -> 0
// The numerical value of targetWord 'aab' is '001' -> 1
// So we return false because 0 + 0 != 1

console.log(isSumEqual('aaa', 'a', 'aaaa')); // true
// The numerical value of firstWord 'aaa' is '000' -> 0
// The numerical value of secondWord 'a' is '0' -> 0
// The numerical value of targetWord 'aaaa' is '0000' -> 0
// So we return true because 0 + 0 == 0
