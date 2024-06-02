// Create a class representing a Car with properties for make, model, and year.
// Add a method to display the car's details.
class Car {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
  FeatureCar() {
    let details = `Car Model :${this.model}
    Manufactured year :${this.year}
    Made in ${this.make}`;
    console.log("Details :", details);
  }
}

let car = new Car("India", "swift", "2015");
// car.FeatureCar();

// Extend the Car class to create a ElectricCar subclass that includes a property for battery life.
class ElectricCar extends Car {
  constructor(make, model, battery, year) {
    super(make, model, year);
    this.battery = battery;
  }
  electric() {
    const detail = `Electric Car Battery :${this.battery}`;
    console.log("Details of electric car:", detail);
  }
}

const hero = new ElectricCar("India", "swift", "500mh", "2015");
hero.electric();
