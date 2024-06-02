// // Onject Literal
// let sampObj = {
//   Hi: "Hello World",
//   2: "King",
// };
// console.log(sampObj);
// console.log(sampObj.Hi);
// console.log(sampObj[2]); // when key is Number Type then we have to use array-notatiobn[]

//Object Constructer

let person = new Object();
person.name = "King";
person.age = 20;
console.log(person);

const { name, age } = person; //Destructured
console.log(name);
console.log(age);
