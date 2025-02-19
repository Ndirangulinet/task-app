var x =  1;
var x =  2;
x =  3;
console.log(x); // 3

// string
let name = "John";
let age = 30;

// concatination
let msg = "My name is " + name + " and I am " + age + " years old. 1+1";
let msg1 = `My name is ${name} and I am ${age} years old. ${1+1} `;

const obj  = {
    city: "New York",
    greet() {
        console.log(`Hello, I am from ${this.city}`);
    }
}


// console.log(obj['city'])

const button = document.querySelector("button");


  function greet() {
    const name = prompt("What is your name?");
    const greeting = document.querySelector("#greeting");
    greeting.textContent = `Hello ${name}, nice to see you!`;
}

button.addEventListener("click", greet);
