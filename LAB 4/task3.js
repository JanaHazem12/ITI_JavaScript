// 3- You're tasked with modeling vehicles and cars in a transportation app:
//     - A Vehicle has type and speed properties. - DONE
//     - All vehicles can start and stop. - DONE
//     - A Car inherits from Vehicle and has an additional drive method. - DONE

//     a- Implement this using ES5 function constructors
//      - Limit the number of Vehicle instances to 50 - DONE
//      - If an attempt is made to create the 51st vehicle, throw an error with the message: 'Vehicle limit reached'. - DONE
//      - The implementation of the methods can be console.log only or you can leave them empty - DONE

//     b- Write a function that checks whether an object is an instance of Car using two different ways

//             3A             //
//           PARENT          //
var noOfInstances = 1;
function Vehicle(type, speed){
    this.type = type;
    this.speed = speed;
    if(noOfInstances > 50){ // change to 50
        throw "Vehicle limit reached";
    }
    noOfInstances++; // increment noOfInstances so the next instance takes this number;
}
Vehicle.prototype.start = function(){
    console.log("Start Vehicle");
}

Vehicle.prototype.stop = function(){
    console.log("Stop Vehicle");
}

//           CHILD          //
function Car(type, speed){
    Vehicle.call(type, speed);
}

// DON'T UNDERSTAND THIS PART //
// creating inheritance //
Car.prototype = Object.create(Vehicle.prototype); // --> sets-up the prototype chain, kills the Car constructor
Car.prototype.constructor = Car; // --> restoring the Car's constructor

Car.prototype.drive = function(){
    console.log("Drive Car");
}

var v1 = new Vehicle("V1", "100km");
var v2 = new Vehicle("V2", "200km");
var v3 = new Vehicle("V3", "300km");
console.log(v1);
console.log(v2);
console.log(v3);


//             3B             //
//           1st way         //
var car1 = new Car("C1", "20km");
console.log("car1 instanceof Vehicle => ");
console.log(car1 instanceof Vehicle);
console.log("car1 instanceof Car => ");
console.log(car1 instanceof Car);

//           2nd way         //
console.log(Vehicle.prototype.isPrototypeOf(car1));
console.log(Car.prototype.isPrototypeOf(car1));


/* A boolean indicating whether the calling object (this) lies in the prototype chain of object.
Directly returns false when object is not an object (i.e. a primitive).*/




