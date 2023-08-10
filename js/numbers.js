// Numbers

// An integer is a whole number
const myNumber = 42;

console.log(myNumber);   

// A number with a decimal point is a float which references the "floating point"
const myFloat = 42.0;

const myString = '42';

console.log(myString +3) //=> 423
console.log(myFloat + 3) //=> 45.0

console.log(Number(myString) + 3) //=> 45

// The Number .parseFloat() method parses an argument and returns a floating point number. If a number cannot be parsed from the argument, it returns NaN

console.log(Number("faith")) //=> NaN
console.log(Number(undefined)) //=> NaN
console.log(Number(true)) //=> 1
console.log(Number.isInteger(myString)); //=> false
console.log(Number.parseFloat(myString)); //=> 42

const myString2 = '42.123abc';
console.log(Number.parseFloat(myString2)); //=> 42.123
console.log(Number.parseFloat(myString2).toFixed(2)); //=> 42.12

// The Number.parseInt() method parses a string argument and returns an integer

console.log(Number.parseInt(myString)); //=> 42