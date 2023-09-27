/*
Write a function that turns a given string into a wave!
You will be passed a string and you must return that string in an array where each letter takes turns to become uppercase.
The input string will always be lowercase but may be empty.
If you encounter a whitespace then pass over it.
*/
const wave = (str) => {
  // Your solution
  const result = [];

  for (let i = 0; i < str.length; i++) {
    if (str[i] !== " ") {
      const word =
        str.slice(0, i).toLowerCase() +
        str[i].toUpperCase() +
        str.slice(i + 1).toLowerCase();
      result.push(word);
    }
  }
  return result
};

console.log(wave("hello")); // ['Hello', 'hEllo', 'heLlo', 'helLo', 'hellO'];
console.log(wave(" gap ")); // [' Gap ', ' gAp ', ' gaP '];
console.log(wave("Two words")); // ['Two words', 'tWo words', 'twO words', 'two Words', 'two wOrds', 'two woRds', 'two worDs', 'two wordS'];
