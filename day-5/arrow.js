// Convert a regular function that takes two arguments and returns their sum into an arrow function.
function add(a, b) {
  return a + b;
}
const add1 = (a, b) => a + b;

console.log(add(3, 4));
console.log(add1(10, 20));
// Create an arrow function that logs a message to the console.
const Helo = () => console.log("This is a message");
Helo();
