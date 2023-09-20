const isValid = s => {
  // Your solution
};

console.log(isValid('[')); //false
console.log(isValid('()')); //true
console.log(isValid('(]')); //false
console.log(isValid('{[]}')); //true
console.log(isValid('([)]')); //false
console.log(isValid('()[]{}')); //true
