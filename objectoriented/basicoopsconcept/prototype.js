 function Vehicle(make, model, color) {
    this.make = make,
    this.model = model,
    this.color = color;
    }

Vehicle.prototype.getName = function () {
    return this.make + " " + this.model}
let car = new Vehicle("Toyota", "Corolla", "Black");
 var abc=car.getName();
 console.log(car);
console.log(abc);
