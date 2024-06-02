let person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
  isAdult: function () {
    return this.age >= 18;
  },
};

// console.log(person.fullName());
// console.log(person.isAdult());
// console.log("Keys :", Object.keys(person));
// vals = Object.values(person);
// console.log("Entries :", Object.entries(person));
// let temparr = Array();
// for (let i = 0; i < vals.length; i++) {
//   temparr.push(typeof vals[i]);
// }

// let typeArr = vals.map((val) => typeof val);
// console.log(typeArr);

// console.log(Object.keys(person));
// console.log(temparr);

let keys = Object.keys(person);

let resultObj = keys.reduce((obj, key) => {
  obj[key] = typeof person[key];
  return obj;
}, {});

console.log(resultObj);
