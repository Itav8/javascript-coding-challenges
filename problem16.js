/*
Given a string of space-separated numbers, write a function that returns the highest and lowest numbers.
There will always be at least one number in the input string.
*/
const highAndLow = numbers => {
  // Your solution
  const numArray = numbers.split(' ')
  let high = -Infinity
  let low = Infinity

  for (let num of numArray) {
    if (Number(num) > high) {
      high = Number(num)
    }

    if (Number(num) < low) {
      low = Number(num)
    }
  }

  return `${high} ${low}`
};

console.log(highAndLow('1 2 3 4 5')); // '5 1'
console.log(highAndLow('1 2 -3 4 5')); // '5 -3'
console.log(highAndLow('1 9 3 4 -5')); // '9 -5'
console.log(highAndLow('0 -214 542')); // '542 -214'
