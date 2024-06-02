// Create an object representing a person with properties like name, age, and gender.
// Write a function to print the object’s properties.

let Person = {
  name: "Hero",
  lname: "John",
  age: 20,
  gender: "Male",
  fullName: function () {
    return this.name + " " + this.lname;
  },
};
// console.log(Person["name"]);
function props(obj) {
  console.log(Object.keys(obj));
}
function vals(obj) {
  console.log(Object.values(obj));
}
props(Person);
vals(Person);

const { name, age, gender } = Person;

// Write a function that takes an object and a property name, and returns the property value.
function getValue(obj, property) {
  console.log(obj[property]);
}

getValue(Person, "name");

// Write a method for the person object created above to return the person’s full name.

// const fullName = (Person) => {
//   return Person["name"] + " " + Person["lname"];
// };
// console.log(fullName(Person));
console.log(Person.fullName());

// Use Object.keys and Object.values to print all keys and values of the person object.
