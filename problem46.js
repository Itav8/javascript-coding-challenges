/*
The marketing team is spending way too much time typing in hashtags.
Let's help them with our own Hashtag Generator! Here's the deal:

It must start with a hashtag #.
Ignore spaces in the input.
All words must have their first letter capitalized.
If the final result is longer than 140 chars it must return false.
If the input or the result is an empty string it must return false.
*/
const generateHashtag = str => {
  // Your solution
  const splitStr = str.split(' ')
  let converted = '#'

  for (let i = 0; i < splitStr.length; i++) {
    if (splitStr[i] !== '') {
      converted += splitStr[i][0].toUpperCase() + splitStr[i].slice(1)
    }
  }

  if (converted.length >= 140 || converted === '#') {
    return false
  } else {
    return converted
  }
};

console.log(generateHashtag('JavaScript')); // #JavaScript
console.log(generateHashtag('Do we have a Hashtag')); // #DoWeHaveAHashtag
console.log(generateHashtag('    Hello     World   ')); // #HelloWorld
console.log(generateHashtag('coding' + ' '.repeat(140) + 'for life')); // #CodingForLife
console.log(generateHashtag('')); // false
console.log(generateHashtag(' ')); // false
console.log(generateHashtag('a'.repeat(140))); // false
console.log(generateHashtag(' '.repeat(200))); // false
