/*
Given an integer, your task is to square every digit of it and concatenate them to produce a new integer.
*/
const squareDigits = num => {
  // Your solution
  let strNums = String(num)
  let squared = ''

  for (let num of strNums) {
    let int = Number(num)
    squared += String(Math.pow(int, 2))
  }
  return Number(squared)
};

console.log(squareDigits(2112)); // 4114
console.log(squareDigits(3212)); // 9414
console.log(squareDigits(9159)); // 8112581
