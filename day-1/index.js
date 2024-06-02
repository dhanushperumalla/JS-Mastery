// 1.Variables and Data Type
// they have 3types of variable declarations
// 1.let
//          }- these both have the same scope Local and Block
// 2.const  - it needs value while intializing
// 3.var - Global & Local Variables

// var x = 10;
// let y = 20;
// const z = 50;
// let sum = x + y + z;
// console.log(sum);

// let a, b, rest;
// [a, b] = [10, 20];
// console.log(a);
// console.log(b);
// [a, b, ...rest] = [10, 20, 30, 40, 50];
// console.log(rest);

// ... spread operator
// let arr = [121, 125, 436, 324, 566];
// console.log(arr);
// let darr = [...arr];
// arr.push(123);
// console.log("arr : ", arr);
// console.log("darr : ", darr);
// console.log(...arr);

// destructuring
// const foo = { bar: 10, baz: "Hello!" };

// const { baz } = foo;

// console.log(foo.bar); //without destructuring
// console.log(baz); //with destructuring

// lets comming to datatypes - JavaScript Is Dynamically typed language
// as we see example we are not mentioning specific types it automatically selects data types
// let x = 1;
// console.log(typeof x);
// x = "1";
// console.log(typeof x);
// x = false;
// console.log(typeof x);
// x = 1341;
// x = x + "sb"; //weekly typed also
// console.log(x);

// 2. Operators
//    - Assignmet OP :- = , +=, -=, *=, /=, %=, **=, <<=, >>= and etc..

// x = 10;
// y = 20;
// y += 10;
// x **= 2;
// console.log(y);
// console.log(x);

// const obj = {};
// obj.x = 10;
// console.log(obj);
// key = "y";
// obj[key] = 2;
// obj.key = key;
// console.log(obj);
// function f() {
//   return 42;
// }
// let x;
// const y = (x = f());
// console.log(y);
// console.log((x = f()));
// console.log([0, (x = f()), 0]);
// console.log(f(0, (x = f()), 0));
//    - Comaparission OP :- ==, !=, ===, !==, <=, >=, <, >

// x = "1";
// y = 1;
// a = 1;
// b = 2;
// console.log(x == y); // true
// console.log(x != y); //false
// console.log(x === y); //false
// console.log(x !== y); //true
// console.log(a > b); //false
// console.log(a < b); //true
// console.log(a <= b); //true
// console.log(a >= b); //false

//    - Arithmetic OP :- +,-,*,/,%,++,--,**
// a = 10;
// b = 20;
// console.log(a + b);
// console.log(a - b);
// console.log(a * b);
// console.log(a / b);
// console.log(a % b);
// console.log(a++); // assigns 11 but consoles 10 bcz post incriment
// console.log(a); // gets 11
// console.log(a--); // assigns 10 but consoles 11 bcz post decriment
// console.log(a);
// console.log(a ** 2);
// console.log(++a); //pre incriment
// console.log(--a); //pre decriment

//    - Bitwise OP  :- &, ^, |, <, >, ~, <<, >>
//    - Logical OP :- &&,||,!
//    - String OP :- + concatinates two strings
//    - Ternary OP :- condition ? "true" : "false"
//    - Unary OP :- delete,typeof
//    - Relational OP :- in,instanceof
//    - Basic OP :- this,new,super

// const operators = {
//   sum: function (a, b) {
//     return console.log(a + b);
//   },
// };

// operators.sum(1, 2);

// 3.Basic Control Structures

// let x = 0;
// if (x > 0) {
//   console.log("Positive");
// } else if (x < 0) {
//   console.log("Negative");
// } else {
//   console.log("Zero");
// }

// let arr = [1, 2, 3, 4, 5, 6, 7, 8];
// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }
// let i = 10;
// while (i > 0) {
//   console.log(i);
//   i--;
// }

// function len(str) {
//   return str.length;
// }

// console.log(len("hello"));
// function numCheck(num) {
//   if (num % 2 == 0) {
//     console.log("Even");
//   } else {
//     console.log("Odd");
//   }
// }
// numCheck(10);
// function sum(a, b) {
//   return a + b;
// }
// const sum = (a, b) => {
//   return a + b;
// };
// console.log(sum(10, 29));
// Scope

// In JavaScript, scope determines the accessibility of variables, functions, and objects in different parts of the code. JavaScript has three main types of scope:

// Global Scope
// Function Scope
// Block Scope
// 1. Global Scope
// Variables declared outside of any function or block have global scope. They can be accessed from anywhere in the code.

var globalVar = "I am global";

function someFunction() {
  console.log(globalVar); // Accessible here
}

someFunction();
console.log(globalVar); // Accessible here as well
// 2. Function Scope
// Variables declared inside a function are scoped to that function. They cannot be accessed outside the function.

function someFunction() {
  var functionVar = "I am local to someFunction";
  console.log(functionVar); // Accessible here
}

someFunction();
console.log(functionVar); // ReferenceError: functionVar is not defined
// 3. Block Scope
// Block scope refers to the scope within a block, which is defined by {}. Variables declared with let or const within a block are only accessible inside that block.

// Block Scope with let and const
{
  let blockVar = "I am block scoped";
  console.log(blockVar); // Accessible here
}
console.log(blockVar); // ReferenceError: blockVar is not defined

{
  const blockConst = "I am also block scoped";
  console.log(blockConst); // Accessible here
}
console.log(blockConst); // ReferenceError: blockConst is not defined
// Function Declarations within Blocks
// Function declarations within blocks are also block-scoped, following the same rules as let and const.

{
  function blockFunction() {
    console.log("I am block scoped");
  }
  blockFunction(); // Accessible here
}
blockFunction(); // ReferenceError: blockFunction is not defined
// Scope Chain
// When a variable is accessed, JavaScript looks for it in the current scope. If it can't find it, it looks in the outer scope, and so on, until it reaches the global scope. This is called the scope chain.

var globalVar = "I am global";

function outerFunction() {
  var outerVar = "I am in outerFunction";

  function innerFunction() {
    var innerVar = "I am in innerFunction";
    console.log(innerVar); // Accessible here
    console.log(outerVar); // Accessible here (outer scope)
    console.log(globalVar); // Accessible here (global scope)
  }

  innerFunction();
  console.log(innerVar); // ReferenceError: innerVar is not defined
}

outerFunction();
console.log(outerVar); // ReferenceError: outerVar is not defined
// Lexical Scope
// JavaScript uses lexical (or static) scoping, which means that the scope of a variable is determined by its position in the source code. Nested functions have access to variables declared in their outer scopes.

// Closures
// A closure is a function that retains access to its lexical scope, even when the function is executed outside that scope.

function outerFunction() {
  var outerVar = "I am in outerFunction";

  return function innerFunction() {
    console.log(outerVar); // Has access to outerVar
  };
}

var myClosure = outerFunction();
myClosure(); // Logs: I am in outerFunction
