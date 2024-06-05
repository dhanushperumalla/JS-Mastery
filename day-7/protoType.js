// function createUSer(name, rno) {
//   this.name = name;
//   this.rno = rno;
// }

// createUSer.prototype.increment = function () {
//   this.rno++;
// };
// createUSer.prototype.printMe = function () {
//   console.log(`Name :${this.name} RNO :${this.rno}`);
// };

// let ramu = new createUSer("Ramu", 20);
// ramu.printMe();
// ramu.increment();
// ramu.printMe();

// let myArr = ["Apple", "Ball", "Car"];
// let myClass = {
//   sec: "A",
//   branch: "CSE",
// };

// Object.prototype.print = function () {
//   console.log(this);
// };

// myArr.print();
// myClass.print();

//Prototype Inheritance

let school = {
  nameOf: "Jai Bharath",
};
let user = {
  name: "John",
};

let myClass = {
  std: "10",
};

let marks = {
  tel: "10",
  hin: "20",
  __proto__: myClass, //one type
};
myClass.__proto__ = user; //another type
Object.setPrototypeOf(user, school);
console.log(marks.nameOf);
