/*
Write a function that accepts an array of 10 integers (between 0 and 9), and returns a string of those numbers in the form of a phone number.
*/
const createPhoneNumber = numbers => {
  // Your solution
  let phoneNum = '('

  for (let i = 0; i < numbers.length; i++) {
    phoneNum += numbers[i]

    if (i === 2) {
      phoneNum += ') '
    }
    if (i === 5) {
      phoneNum += '-'
    }
  }
  
  return phoneNum
};

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])); // '(123) 456-7890'
console.log(createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1])); // '(111) 111-1111'
console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])); // '(123) 456-7890'
