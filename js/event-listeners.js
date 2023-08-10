// Javascript Event Listeners
const view = document.querySelector('#view2');
// console.log(view) ;
const div = view.querySelector("div");
const h2 = div.querySelector("h2");

// Syntax: addEventListner(event, function, useCapture)
 
const doSomething = () => {
    alert("doing something");
}

h2.addEventListener("click", doSomething, false);
h2.removeEventListener("click", doSomething, false);

h2.addEventListener("click", (e) => {
    console.log(e.target);
    e.target.textContent = 'Clicked'
})
// document.addEventListener("readystatechange", (e) => {
//     console.log(e.target);
//     e.target.textContent = 'Clicked'
// })