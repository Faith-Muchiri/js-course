// Conditionals: if statements

// // syntax
// if(condition) { 
//     //run some code
// }


// // if...else
// // syntax
// if(condition) { 
//     //run some code
// }else{
//     //do sth else
// }


// let customerIsBanned = true;
// let soup = "chicken noodle soup";
// let crakers = true;
// let reply;

// if(customerIsBanned) {
//     reply = 'No soup for you!'
// }else if(soup && crakers) {
//     reply = `Here's your order of ${soup} and cracker`;
// }else if(soup) {
//     reply = `Here's your order of ${soup}`;
// }else{
//     reply = `Sorry we're out of soup`;
// }

// console.log(reply); 


// let testScore = 89;
// let collegeStudent = true
// let grade;

// if(testScore >= 90) {
//     grade =  'A';
// }else if(testScore >= 80){
//     grade = 'B';
// }else if(testScore >= 70){
//     grade  = 'C';
// }else if(testScore >= 60){
//     grade = 'D'
// }else {
//     if(collegeStudent){
//         grade = 'U'
//     }else {
//         grade = 'F'
//     }
// }

// console.log(grade);


// //..................................................  //  //
// Decision tree!
if(playerOne === computer){
    // tie the game
}else if(playerOne === "rock"){
    if(computer === "paper"){
        // computer wins
    }else {
        //playerOne wins
    }
}else if (playerOne === "paper"){
    if(computer === "scissors"){
        //computer wins
    }else {
        //playerOne wins
    }
}else{
    if(computer === "rock"){
        //computer wins
    }else {
        //playerOne wins
    }
}
