/*
Trolls are attacking your comment section!
A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.
Your task is to write a function that takes a string and returns a new string with all vowels (a, e, i, o, u) removed.
*/
const disemvowel = str => {
  // Your solution
  let newStr = ''
  const vowels = "aeiouAEIOU"
  
  for (let char of str) {
    if (!(vowels.includes(char))) {
      newStr += char
    }
  }
  return newStr
};

console.log(disemvowel('This website is for losers LOL!')); // 'Ths wbst s fr lsrs LL!'
