//  Fetch API require a discussion of...
// Callbacks, Promises, Thenables, and Async/Await

// // ................callbacks.................
// function firstFunction(parameters, callback) {
//     // do stuff
//     callback();
// }

// // ...............AKA "callback hell".................
// firstFunction(para, function() {
//     // do stuff
//     secondFunction(para, function() {
//         thirdFunction(para, function() {

//         })
//     })
// })

// // ............Promises..................
// // 3 states: Pending, Fulfilled, Rejected
//  const myPromise = new Promise((resolve, reject) => {
//     const error = false;
//     // const error = true;
//     if(!error){
//         resolve("Yes! resolved the promise!");
//     }else {
//         reject("No! rejected the promise.")
//     }
//  });

//  const myNextPromise = new Promise((resolve, reject) => {
//     setTimeout(function() {
//         resolve("MyNextPromise resolved!");
//     }, 3000);
//  });

//  myNextPromise.then(value => {
//     console.log(value);
//  });

//  myPromise.then(value => {
//     console.log(value);
//  });

// //  ............pending .................//
// // const users = fetch("https://jsonplaceholder.typicode.com/users");
// // // pending
// // console.log(users);

// const users = fetch("https://jsonplaceholder.typicode.com/users")
//   .then((response) => { 
//     return response.json();
//   })
//   .then((data) => {
//     data.forEach((user) => {
//       console.log(user);
//     });
//   });

// console.log(users);

// // ..................Async / Await................. //
// const myUsers = {
//     userList: []
// }

// const myCoolFunction = async () => {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     const jsonUserData = await response.json();
//     return jsonUserData;
// }

// const anotherFunc = async () => {
//     const data = await myCoolFunction();
//     myUsers.userList = data;
//     console.log(myUsers.userList);
// }

// anotherFunc();
// console.log(myUsers.userList);

// // ...............workflow function..............//
// const getAllUserEmails = async () => {

//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     const jsonUserData = await response.json();

//     const userEmailArray = jsonUserData.map(user => {
//         return user.email;
//     });

//     console.log(userEmailArray);
// }
// getAllUserEmails();
// // console.log(getAllUserEmails()) ;


// // ...............2nd parameter of fetch is an object..............//
// // ...............GET............. //
// const getDadJoke =  async () => {

//     const response = await fetch("https://icanhazdadjoke.com/", {
//         method: "GET",
//         headers: {
//             Accept: "application/json"
//             // Accept: "text/plain"
//         }
//     });
//     const jsonJokeData = await response.json();
//     // const textJokeData = await response.text();

//     console.log(jsonJokeData.joke);
//     // console.log(textJokeData.joke);
// }
// getDadJoke();


// // ................................................

// // ...............POST............. //
// const jokeObject = {
//     id: "0oO7zTSv4Ed",
//     joke: "Why was it called the dark ages? Because of all the knights."
// }

// const postData = async (jokeObj) => {

//     const response = await fetch("https://httpbin.org/post", {
//         method: "POST",
//         headers: {
//             "Content-Type" : "application/json"
//         },
//         body: JSON.stringify(jokeObj)
//     });
//     const jsonResponse = await response.json();

//     console.log(jsonResponse.headers);
// }

// postData(jokeObject);

// // ................................................. //
// const requestJoke = async (firstName, lastName)=> {
//     const response = await fetch(`http://api.icndb.com/jokes/random?firstName=${firstName}&lastMane=${lastName}`);
//     const jsonResponse = await response.json();

//     console.log(jsonResponse.value.joke);  
// }

// requestJoke("Bruce", "Lee");  

// ..............abstract into function ........................ //
const getDataFromForm = () => {
    const requestObj = {
        firstName: 'Bruce',
        lastName: 'Lee',
        categories: ["nerdy"]
    };
    return requestObj;
}

const buildRequestUrl = (requestData) => {
    return fetch(`http://api.icndb.com/jokes/random?firstName=${requestData.firstName}&lastMane=${requestData.lastName}&limitTo=${requestData.categories}`);    
}

const requestJoke = async (url) => {
    const response = await fetch(url);
    const jsonResponse = await response.json();
    const joke = jsonResponse.value.joke;
    postJokeToPage(joke);
}

const postJokeToPage = (joke) => {
    console.log(joke);
}

// procedural "Workflow" function
const processJokeRequest = async () => {
    const requestData = getDataFromForm();
    const requestUrl = buildRequestUrl(requestData);
    await requestJoke(requestUrl);
    console.log("Finished!");
}

processJokeRequest();