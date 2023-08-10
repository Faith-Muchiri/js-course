// User input

alert("Hello world!");

let myBoolean = confirm("OK === True\n Cancel === False")
console.log(myBoolean )

let name = prompt("Enter your name")
name  = name.trim();

if(name){
    console.log(name.length);
    // console.log(name.trim().length);
    // console.log(name.trim());
} else {
    console.log(`You didn't enter your name.`);
}

console.log(name ?? "You didn't enter your name");
