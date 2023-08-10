// ********** // STRINGS AND STRING METHODS // **********
// strings
const myVariable = "Mathematics";

// The length property
console.log(myVariable.length); // => 11

//  String Methods
console.log(myVariable.charAt(0)); //=> M
console.log(myVariable.charAt(5)); //=> m

console.log(myVariable.indexOf("mat")); //=> 5

console.log(myVariable.lastIndexOf("at")); //=> 6
 
console.log(myVariable.slice(5, 8)); //=>mat //the char at the last position is not returned

console.log(myVariable.toLowerCase()); //=> mathematics
console.log(myVariable.toLocaleUpperCase()); //=> MATHEMATICS 

console.log(myVariable.includes("div")); //=> false

console.log(myVariable.split("e")); //=> ["Math", "matics "]
console.log(myVariable.split("")); //=> ["M", "a", "t", "h", "e", "m", "a", "t", "i", "c", "s"];
console.log("john,joe,dave".split(",")); //=> ["john", "joe", "dave"]
