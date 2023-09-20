/*
Write a function that takes any non-negative integer as an argument and returns it with its digits in descending order.
Essentially, rearrange the digits to create the highest possible number.
*/
// const descendingOrder = n => {
//   // Your solution
//   const strN = String(n)
//   const arrNum = strN.split('')
//   const sorted = arrNum.sort((a, b) => b - a)
//   const strSorted = sorted.join('')

//   return Number(strSorted)
// };

const descendingOrder = n => {
  // Your solution
  const strN = String(n)
  const arrNum = strN.split('')

  for (let i = 0; i < arrNum.length; i++) {
    for (let j = 0; j < arrNum.length - 1; j++) {
      const currentNum = Number(arrNum[j])
      const nextNum = Number(arrNum[j + 1])
      // perform swap descending
      if (currentNum < nextNum) {
        arrNum[j] = nextNum;
        arrNum[j + 1] = currentNum;
      }
    }
  }

  return arrNum.join('')
};


console.log(descendingOrder(0)); // 0
console.log(descendingOrder(1)); // 1
console.log(descendingOrder(1021)); // 2110
console.log(descendingOrder(42145)); // 54421
console.log(descendingOrder(145263)); // 654321
console.log(descendingOrder(123456789)); // 987654321
