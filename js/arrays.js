// // Arrays

// const myArray = []

// // add elements to an array
// myArray[0] = "faith";
// myArray[1] = 1000;
// myArray[2] = false;

// //   refer to an array
// console.log(myArray);

// // length property
// console.log(myArray.length);

// // last element in an array
// console.log(myArray[myArray.length - 1]);

// console.log(myArray[1]);


// const myArray = []

// // add elements to an array
// myArray[0] = "faith";
// myArray[1] = 1000;
// myArray[2] = false;
// console.log(myArray);

// // push and unshift return the new array length
// // add items to the end of an array
// myArray.push("school");
// console.log(myArray);

// // add items at the beginning of an array
// myArray.unshift(42);
// console.log(myArray);

// // pop and shift returns the value of the removed item
// // remove item at the end of array list
// myArray.pop();
// console.log(myArray);

// // remove item at the beginning of array list
// myArray.shift();
// console.log(myArray);
//  


// // array methods
// const myArray = ['A','B','C','D','E','F'] ;
 
// // const newArray = myArray.slice(2);
// // console.log(newArray); //=> ["C", "D", "E","F"]

// const newArray = myArray.slice(2,5);
// console.log(newArray); //=>["C", "D", "E"]


// myArray.reverse();
// console.log(myArray); //=>["F", "E","D","C","B","A"];


// const newString = myArray.join();
// console.log(newString); //=> A,B,C,D,E,F

// const newStrArr = newString.split(",");
// console.log(newStrArr); //=> ['A','B','C','D','E','F']


// const myArrayA = ['A','B','C'];
// const myArrayB = ['D','E','F'];

// // const newArray = myArrayA.concat(myArrayB);
// // console.log(newArray);
// const newArray = [...myArrayA, ...myArrayB];//spread operator
// console.log(newArray);



// accessing values from arrays
const equipShelfA = ["baseball", "football", "volleyball"];
const equipShelfB = ["basketball", "golf balls", "tennis balls"];

const clothesShelfA = ["tank tops", "t-shirts", "jerseys"];
const clothesShelfB = ["sweat tops", "sweat pants", "hoodies"];

console.log(equipShelfA[1]);
// or
console.log(clothesShelfB[0]);


const equipDept = [equipShelfA, equipShelfB];
const clothesDept = [clothesShelfA, clothesShelfB];

console.log(equipDept[0][1]);
console.log(clothesDept[1][0]);

const sportsStore = [equipDept, clothesDept];
console.log(sportsStore);
console.log(sportsStore[0][0][1]);
console.log(sportsStore[1][1][0]); 
