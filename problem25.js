/*
Write a function that subtracts one list from another and returns the result.
It should remove all values from array a, which are present in array b.
*/
const arrayDiff = (a, b) => {
  // Your solution
  const results = []

  for (const num of a) {
    if (!(b.includes(num))) {
      results.push(num)
    }
  }
  return results

};

console.log(arrayDiff([1, 8, 2], [])); // [1, 8, 2]
console.log(arrayDiff([1, 2, 3], [1, 2])); // [3]
console.log(arrayDiff([3, 4], [3])); // [4]
console.log(arrayDiff([], [4, 5])); // []
