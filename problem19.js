/*
Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed.
Strings passed in will consist of only letters and spaces.
*/
// const spinWords = str => {
//   // Your solution
//   const strArr = str.split(' ')
//   const revised = []

//   for (let i = 0; i < strArr.length; i++) {
//     if (strArr[i].length >= 5) {
//       revised.push(strArr[i].split('').reverse().join(''))
//     } else {
//       revised.push(strArr[i])
//     }
//   }
//   return revised.join(' ')
// };

const spinWords = str => {
  // Your solution
  const strArr = str.split(' ')
  const revised = []

  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i].length >= 5) {
      let reverse = ''
      for (let j = strArr[i].length - 1; j >= 0; j--) {
        reverse += strArr[i][j]
      }
      revised.push(reverse)
    } else {
      revised.push(strArr[i])
    }
  }
  return revised.join(' ')
};


console.log(spinWords('This is a test')); // 'This is a test'
console.log(spinWords('Hey fellow warriors')); // 'Hey wollef sroirraw'
console.log(spinWords('This is another test')); // 'This is rehtona test'
