/*
*/

/*
Input: accounts = [[1,5],[7,3],[3,5]]
Output: 10
Explanation:
1st customer has wealth = 1 + 5 = 6
2nd customer has wealth = 7 + 3 = 10
3rd customer has wealth = 3 + 5 = 8
The 2nd customer is the richest with a wealth of 10.
*/

const maximumWealth = accounts => {
  // Your solution
};

console.log(
  maximumWealth([
    [2, 8, 7],
    [7, 1, 3],
    [1, 9, 5],
  ])
); // 17
console.log(
  maximumWealth([
    [1, 5],
    [7, 3],
    [3, 5],
  ])
); // 10
console.log(
  maximumWealth([
    [1, 2, 3],
    [3, 2, 1],
  ])
); // 6
