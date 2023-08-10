// // Web Store Api

// // Not part of the DOM - refers to the window API
// // Available to JS via the global variable: window

// // We do not have to type window. It is implied:

// window.alert("ok!");
// alert("ok!")

// window.alert(window.location);
// alert(location);
  
const myArry = ["eat", "sleep", "code"];  

const myObj = {
    name: "Faith",
    hobbies: ["eat", "sleep", "code"],
    logName: function () {
        console.log(this.name);
    }
};

// myObj.logName()

sessionStorage.setItem("mySessionStore1", JSON.stringify(myObj));
const mySessionData = JSON.parse(sessionStorage.getItem("mySessionStore1"));
console.log(mySessionData)

sessionStorage.setItem("mySessionStore2", JSON.stringify(myArry));
const mySessionArray = JSON.parse(sessionStorage.getItem("mySessionStore2"));
console.log(mySessionArray);


// ....................it persists the data .................. //
localStorage.setItem("myLocalStore1", JSON.stringify(myObj));
const mylocalData = JSON.parse(localStorage.getItem("myLocalStore1"));
console.log(mylocalData)

// localStorage.setItem("myLocalStore2", JSON.stringify(myArry));
// localStorage.removeItem("myLocalStorage");
// localStorage.clear();
// const storeLength =  localStorage.length;
// const key = localStorage.key(0);

const mylocalArray = JSON.parse(localStorage.getItem("myLocalStore2"));
console.log(mylocalArray); 