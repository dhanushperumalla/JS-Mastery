// Write a function that accepts a callback and calls it after 3 seconds with a message "Callback executed".

// function timer(callBack) {
//   setTimeout(() => {
//     callBack();
//   }, 3000);
// }

// function Hello() {
//   console.log("Hello");
// }
// timer(Hello);

// Create a function that takes two numbers and a callback, performs addition, and then calls the callback with the result.
function sum(x, y, callback) {
  const result = x + y;
  callback(result);
}

function display(x) {
  console.log(x);
}

sum(1, 2, display);
