//  Loops
// ..................... while loop .....................
let myNumber = 0;
while(myNumber <50){
    myNumber += 2;
    // myNumber++
    console.log(myNumber)
}

let myName = 'faith';
let counter = 0;
let myLetter;
while (counter <= 3 ) {
    myLetter = name[counter];
    console.log(myLetter);
    if (counter === 1) {
        counter += 2;
        continue;
    }
    if (myLetter === "t") break;
    counter++;
}
console.log(counter);


// ..................... do while loop .....................
let myOtherNumber = 0;
do {
    myOtherNumber += 2;
    // myOtherNumber++)
    console.log(myOtherNumber);
} while (myOtherNumber <50);


// ..................... for loop .....................
for (let i = 0; i <= 10; i++) {
    console.log(i);
}

let name = 'faith';
for (let i = 0; i < name.length; i++) {
    console.log(`${i}: ${name.charAt(i)}`);
}