/*
Create a function that takes a positive integer less than 4,000 as its input and returns a string containing the Roman numeral representation of that integer.
Modern Roman numerals are written by expressing each digit separately starting with the leftmost digit and skipping any digit with a value of zero.
There can't be more than 3 identical symbols in a row. More about Roman numerals: http://en.wikipedia.org/wiki/Roman_numerals

Table of individual decimal places for your reference:
  Thousands	Hundreds	Tens	Units
1	        M	       C	   X	    I
2	       MM	      CC	  XX	   II
3	      MMM	     CCC	 XXX	  III
4		              CD    XL	   IV
5		               D	   L	    V
6		              DC	  LX	   VI
7		             DCC	 LXX	  VII
8		            DCCC	LXXX	 VIII
9		              CM	  XC	   IX
*/
const convertToRoman = (number) => {
  // Your solution
  const romanNumerals = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };

  let result = "" //XXII

  for (const symbol in romanNumerals) {
    const value = romanNumerals[symbol];
    console.log("BEFORE WHILE NUMBER", number, "VALUE", value);
    while (number >= value) {
      console.log("INSIDE WHILE NUMBER", number)
      result += symbol;
      number -= value;
      console.log("INSIDE WHILE NUMBER", number, "RESULT", result);
    }
  }
  return result
};

console.log(convertToRoman(4)); // IV
console.log(convertToRoman(9)); // IX
console.log(convertToRoman(11)); // XI
console.log(convertToRoman(19)); // XIX
console.log(convertToRoman(22)); // XXII
console.log(convertToRoman(15)); // XV
console.log(convertToRoman(39)); // XXX + IX = XXXIX
console.log(convertToRoman(160)); // C + LX = CLX
console.log(convertToRoman(207)); // CC + VII = CCVII
console.log(convertToRoman(246)); // CC + XL + VI = CCXLVI
console.log(convertToRoman(789)); // DCC + LXXX + IX = DCCLXXXIX
console.log(convertToRoman(1009)); // M + IX = MIX
console.log(convertToRoman(1066)); // M + LX + VI = MLXVI
console.log(convertToRoman(1776)); // M + DCC + LXX + VI = MDCCLXXVI
console.log(convertToRoman(1918)); // M + CM + X + VIII = MCMXVIII
console.log(convertToRoman(1954)); // M + CM + L + IV = MCMLIV
console.log(convertToRoman(2014)); // MM + X + IV = MMXIV
console.log(convertToRoman(2421)); // MM + CD + XX + I = MMCDXXI
console.log(convertToRoman(3999)); // MMM + CM + XC + IX = MMMCMXCIX
