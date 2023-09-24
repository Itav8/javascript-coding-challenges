/*
Given an array candies where candies[i] represents the number of candies that the ith kid has, and an integer extraCandies, write a function that for each kid checks if he/she would have the greatest number of candies in the group if they were given extraCandies.
Note that multiple kids can have the greatest number of candies. For example,
*/
/*
// Input: candies = [2,3,5,1,3], extraCandies = 3
// Output: [true,true,true,false,true]

Explanation:
- Kid 1 has 2 candies and if he or she receives all extra candies (3) will have 5 candies --- the greatest number of candies among the kids.
- Kid 2 has 3 candies and if he or she receives at least 2 extra candies will have the greatest number of candies among the kids.
- Kid 3 has 5 candies and this is already the greatest number of candies among the kids.
- Kid 4 has 1 candy and even if he or she receives all extra candies will only have 4 candies.
- Kid 5 has 3 candies and if he or she receives at least 2 extra candies will have the greatest number of candies among the kids.
*/

const kidsWithCandies = (candies, extraCandies) => {
  // Your solution
  const max = Math.max(...candies)
  const booleans = []

  for (let candy of candies) {
    booleans.push(candy + extraCandies >= max)
  }
  return booleans
};

console.log(kidsWithCandies([12, 1, 12], 10)); // [true, false, true]
console.log(kidsWithCandies([4, 2, 1, 1, 2], 1)); // [true, false, false, false, false]
