/*
Given a string which includes only letters, write a function that produces the outputs below.
*/
const accum = str => {
  // Your solution
  const output = []

  for (let i = 0; i < str.length; i++) {
    const char = str[i]
    const count = i + 1
    let result = ''

    for (let j = 0; j < count; j++) {
      if (j === 0) {
        result += char.toUpperCase()
      } else {
        result += char.toLowerCase()
      }
    }

    output.push(result)
  }

  return output.join('-')
};

console.log(accum('abcd')); // 'A-Bb-Ccc-Dddd'
console.log(accum('cwAt')); // 'C-Ww-Aaa-Tttt'
console.log(accum('RqaEzty')); // 'R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy'
