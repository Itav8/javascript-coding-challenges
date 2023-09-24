/*
You are given an array of at least length 3 containing integers.
The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N.
Write a function that takes the array as an argument and returns this "outlier" N.
*/
const findOutlier = (arr) => {
  // Your solution
  const evens = []
  const odds = []

  for (const num of arr) {
    if (num % 2 === 0) {
      evens.push(num)
    } else {
      odds.push(num)
    }
  }

  if (evens.length === 1) {
    return evens[0]
  } else {
    return odds[0]
  }
  // console.log(evens)
  // console.log(odds)
};

console.log(findOutlier([0, 1, 2])); // 1
console.log(findOutlier([1, 2, 3])); // 2
console.log(findOutlier([1, 1, 0, 1, 1])); // 0
console.log(findOutlier([0, 0, 3, 0, 0])); // 3
console.log(findOutlier([160, 3, 1719, 19, 13, -21])); // 160
console.log(findOutlier([4, 0, 100, 4, 11, 2602, 36])); // 11
