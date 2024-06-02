// let items = ["Pen", "Book", "Pad", "Mouse"];
// items[5] = "Bag";

// items.forEach((items, i) => {
//   console.log(`${items} : ${i}`);
// });

// // console.log(items.reverse());

// const iterator = items.keys();
// // console.log(iterator);
// for (const key of iterator) {
//   console.log(`${key}: ${items[key]}`);
// }

// // Array Constructor

// let arr1 = Array(5);

// console.log(arr1);
// console.log(arr1.length);
// console.log(Array.from(items));
// console.log(Array.from([1, 2, 3, 4], (x) => x + x));

// const set = new Set(["1", "2"]);
// console.log(set);
// console.log(typeof set);
// let demset = Array.from(set);
// console.log(demset, typeof demset);
// const map = new Map();
// let dem = Array.from(set);
// console.log(typeof map);

// let components = ["keyboard", "mouse", "Cpu", "Ram"];
// console.log(components);

// popCompo = components.pop();
// console.log("Pop :", popCompo);

// pushCompo = components.push("Hello");
// console.log("Hello push inedex:", pushCompo);
// console.log(components);

// shiftCompo = components.shift();
// console.log("Shift :", shiftCompo);

// unshiftCompo = components.unshift("Bye");
// console.log("Unshift at index :", unshiftCompo);
// console.log(components);

//Iterative functions
// The forEach method executes a provided function once for each array element.

// let fruits = ["Apple", "Banana", "Mango"];
// fruits.forEach(function (fruit) {
//   console.log(fruit);
// });

// map();
// The map method creates a new array populated with the results of calling a provided function on every element in the calling array.

let numbers = [1, 2, 3, 4];
// let doubled = numbers.map(function (num) {
//   return num * 2;
// });
// console.log(doubled);

// reduce()
// The reduce method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.

let sum = numbers.reduce(function (total, num) {
  return total + num;
}, 0);
console.log(sum);

// filter()
// The filter method creates a new array with all elements that pass the test implemented by the provided function.

let evens = numbers.filter(function (num) {
  return num % 2 === 0;
});
console.log(evens);

// some
// The some method tests whether at least one element in the array passes the test implemented by the provided function.

let hasEven = numbers.some(function (num) {
  return num % 2 === 0;
});
console.log(hasEven);

// every()
// The every method tests whether all elements in the array pass the test implemented by the provided function.

let allEven = numbers.every(function (num) {
  return num % 2 === 0;
});
console.log(allEven);
