/*
Write a function that capitalizes each word in a given input string.
*/
String.prototype.capitalize = function () {
  // Your solution
  const strArr = str.split(' ')
  const newStr = []

  for (let i=0; i < strArr.length; i++) {
    const word = strArr[i]

    newStr.push(word[0].toLocaleUpperCase() + word.slice(1))
  }
  return newStr.join(' ')
};

var str = "How can mirrors be real if our eyes aren't real";
console.log(str.capitalize()); // 'How Can Mirrors Be Real If Our Eyes Aren't Real'
