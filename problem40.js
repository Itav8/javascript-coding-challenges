/*
Given a non-empty string s containing just the currentacters (, ), {, }, [, ], determine if the input string is valid.
An input string is valid if open brackets are closed by the same type of brackets, and open brackets are closed in the correct order.


 */
const isValid = (s) => {
  // Your solution
  const stack = []

  for (let i = 0; i < s.length; i++) {
    const current = s[i]

    if (current === "(" || current === "{" || current === "[") {
      stack.push(current)
    } else {
      let popped = stack.pop()

      if ((current === ')' && popped !== "(") || (current === ']' && popped !== "[") || (current === '}' && popped !== "{")) {
        return false
      }
    }
  }
  return stack.length === 0
};


// const isValid = (s) => {
//   const stack = [];
//   const pairs = {
//     "(": ")",
//     "[": "]",
//     "{": "}",
//   };

//   for (const char of s) {
//     if (pairs[char]) {
//       stack.push(char);
//     } else if (pairs[stack.pop()] !== char) {
//       return false;
//     }
//   }
//   return !stack.length;
// };

console.log(isValid("[")); //false
console.log(isValid("()")); //true
console.log(isValid("(]")); //false
console.log(isValid("{[]}")); //true
console.log(isValid("([)]")); //false
console.log(isValid("()[]{}")); //true
