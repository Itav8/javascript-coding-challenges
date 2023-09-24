/*
ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet.
ROT13 is an example of the Caesar cipher.
Create a function that takes a string and returns the string ciphered with Rot13.
If there are numbers or special characters included in the string, they should be returned as they are.
Only letters from the latin/english alphabet should be shifted.
*/
const rot13 = (str) => {
  // Your solution
  let result = "";

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    let code = str.charCodeAt(i);

    if ((code >= 65 && code <= 90) || (code >= 97 && code <= 122)) {
      let shift;
      if (char.toUpperCase() === char) {
        shift = 65; // Uppercase
      } else {
        shift = 97; // Lowercase
      }

      const rotated = ((code - shift + 13) % 26) + shift; // Apply ROT13
      char = String.fromCharCode(rotated);
    }

    result += char;
  }
  return result;
};

console.log(rot13("az AZ")); // nm NM
console.log(rot13("10+2 is twelve.")); // 10+2 vf gjryir.
console.log(rot13("abcdefghijklmnopqrstuvwxyz")); // nopqrstuvwxyzabcdefghijklm
