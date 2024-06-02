// Use template literals to create a string that includes variables and spans multiple lines.

const name = "Luckey";
const age = 13;
const city = "Krosuru";

// Create a multi-line string using template literals
const message = `Hello, my name
is ${name}.I am ${age} years 
old and live in ${city}.It's a pleasure
to meet you!`;

// console.log(message);

// Create a function that takes a name and age and returns a greeting using template literals.
function greet(name, age) {
  console.log(`Hello ${name},your age is: ${age}.`);
}

greet(name, age);
