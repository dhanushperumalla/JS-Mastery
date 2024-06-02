// 1)Create an array of 5 numbers and log each number using a forEach loop.
let arr = [1, 2, 3, 4, 5];
arr.forEach(function (_, i) {
  console.log(`${i}: ${arr[i]}`);
});
// 2.Write a function that takes an array of numbers and returns the sum of the numbers.
function arrSum(arr) {
  return arr.reduce((prev, current) => {
    return prev + current;
  }, 0);
}
console.log("Array Sum :", arrSum(arr));
// Use map to create a new array by doubling each number in an existing array.
let newArray = [];
arr.map((item) => {
  newArray.push(item * 2);
  return newArray;
});
console.log(newArray);

// let newArray = arr.map((item) => item * 2);
// console.log(newArray);

// Use filter to get all numbers greater than 10 from an array.
let farray = [10, 20, 30, 40, 50, 60];
let filtArray = farray.filter((item) => item > 10);
console.log(filtArray);

// Write a function that uses reduce to calculate the product of all numbers in an array.

let redarray = arr.reduce((prev, current) => {
  return prev * current;
}, 1);
console.log(redarray);
