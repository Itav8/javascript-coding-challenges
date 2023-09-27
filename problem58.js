/*
Write a function that converts all the keys in an object from snake case to camel case.
*/
const toCamel = obj => {
  // Your solution
  const result = {}

  for (let key in obj) {
    let newKey = ''
    let capitalizeNext = false;

    for (let char of key) {
      if (char === "_") {
        capitalizeNext = true
      } else {
        if (capitalizeNext) {
          newKey += char.toUpperCase()
          capitalizeNext = false
        } else {
          newKey += char.toLowerCase()
        }
      }
    }
    result[newKey] = obj[key]
  }

  return result
};

console.log(
  toCamel({
    first_name: 'John',
    last_name: 'Rambo',
    favorite_movie: 'First Blood',
  })
); // {'firstName': 'John', 'lastName': 'Rambo', 'favoriteMovie': 'First Blood'}
