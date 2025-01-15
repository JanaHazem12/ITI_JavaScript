// 1- You're tasked with modeling vehicles and cars in a transportation app:
//     - A Vehicle has type and speed properties.
//     - All vehicles can start and stop.
//     - A Car inherits from Vehicle and has an additional drive method.

//     a- Implement this using ES6 classes
//      - Limit the number of Vehicle instances to 50. If an attempt is made to create the 51st vehicle, throw an error with the message: 'Vehicle limit reached'.
//      - the implementation of the methods can be console.log only or you can leave them empty
 
//     b- Write a function that checks whether an object is an instance of Car using two different ways



//           1A        //
let noOfInstances = 1;
class Vehicle{
    constructor(type, speed){
        // console.log(Vehicle.noOfInstances);
        if(noOfInstances > 50){
            throw "Vehicle limit reached";
        }
            // console.log("ggg");
        this.type = type;
        this.speed= speed;
        noOfInstances++;
    }
    Start() {
        console.log("Start Vehicle");
    }
    Stop() {
        console.log("Stop Vehicle");
    }
};

class Car extends Vehicle{
    constructor(type, speed) {
        super(type, speed);
    }
    Drive(){
        console.log("Drive Vehicle");
    }
}

var v1 = new Vehicle("V1", "100km");
var v2 = new Vehicle("V2", "200km");
var v3 = new Vehicle("V3", "300km");
console.log(v1);
console.log(v2);
console.log(v3);


//             1B             //
//           1st way         //
var car1 = new Car("C1", "20km");
console.log("car1 instanceof Vehicle => ");
console.log(car1 instanceof Vehicle);
console.log("car1 instanceof Car => ");
console.log(car1 instanceof Car);

//           2nd way         //
console.log(Vehicle.prototype.isPrototypeOf(car1));
console.log(Car.prototype.isPrototypeOf(car1));