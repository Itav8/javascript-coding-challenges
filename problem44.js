/*
ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher. Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted.


*/
const rot13 = str => {
  // Your solution
};

console.log(rot13('az AZ')); // nm NM
console.log(rot13('10+2 is twelve.')); // 10+2 vf gjryir.
console.log(rot13('abcdefghijklmnopqrstuvwxyz')); // nopqrstuvwxyzabcdefghijklm
