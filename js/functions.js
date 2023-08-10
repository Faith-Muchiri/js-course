//  Functions
// Reusable code!


// // Methods - Built in functions 
// 'Faith'.toLowerCase()

// ................Function Declaration Syntax:............//
function sum(num1, num2) {
    return num1 + num2;
}

console.log(sum(5,9));


// function getUserNameFromEmail(email)  {
//     return email.slice(0, email.indexOf("@"));
// }

// console.log(getUserNameFromEmail("fayee@gmail.com"));


// // Anonymous functions
// const getUserNameFromEmail = function(email) {
//     return email.slice(0, email.indexOf("@"));
// };

// console.log(getUserNameFromEmail('fayee@yahoo.com'));


// Arrow Functions
const getUserNameFromEmail = (email) => {
    return email.slice(0, email.indexOf("@"));
};

console.log(getUserNameFromEmail('fayee@yahoo.com'));


const toProperCase = (name) => {
    return name.charAt(0).toUpperCase()+name.slice(1).toLowerCase();
}

console.log(toProperCase('fAIth'));