/*
Complete the solution so that the function will break up camel casing, using a space between words.
*/
const solution = (str) => {
  // Your solution
  let result = "";

  for (let i = 0; i < str.length; i++) {
    const currentChar = str[i];
    const nextChar = str[i + 1];

    result += currentChar;

    if (nextChar && isLowerCase(currentChar) && isUpperCase(nextChar)) {
      result += " ";
    }
  }

  return result;
};

function isLowerCase(char) {
  return char >= "a" && char <= "z";
}

function isUpperCase(char) {
  return char >= "A" && char <= "Z";
}

console.log(solution("camelCasingHere")); // camel Casing Here
console.log(solution("No Camels here")); // No Camels here
console.log(solution("ABC")); // ABC
console.log(solution("")); // ''
