// Javascript Errors and Error Handling
"use strict";

// Uncaught ReferenceError: variable is not defined
// variable = "faith";
// console.log(variable);
// const variable = "faith";
// console.log(variable);

// Uncaught SyntaxError: Unexpected token
// Object..create();

// Uncaught TypeError: Assignment to constant variable.
// const name = "Dave";
// name = "Joe";

const makeError = () => {
  let i = 1;
  while (i <= 5) {
    try {
      if (i % 2 !== 0) {
        // const name = "Fayee";
        // name = "wambui";
        // throw new customError("This is a custom error!")
        // throw new Error("This is a custom error!")
        throw new Error("Odd number");
      }
      console.log("Even number!");
    } catch (err) {
      // console.error(err)
      console.error(err.name);
      console.error(err.message);
      console.error(err.stack);
      // console.warn(err)
      // console.table(err)
    } finally {
      console.log("...finally");
      i++;
    }
  }
};
makeError();

// function customError(message) {
//     this.message = message;
//     this.name = "customError";
//     this.stack = `${this.name}: ${this.message}`;
// }
