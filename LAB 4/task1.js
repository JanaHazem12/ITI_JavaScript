// 1- Create an array method that calculates the average for an array of numbers.
//     ex: var arr = [1, 2, 3, 4]
//         arr.average() // should return the average
//     Note: Handle validation

// checks if average is already one of the prototypes, then OVERRIDE it, if NOT, then CREATE it
Array.prototype.average = function(){
    if((!this.some(isNaN)) && this.length != 0){ // --> !(if some of the elements are NOT numbers) --> if ALL of the elements are numbers
        var sum = 0;
        var avg = 0;
        var arrLength = this.length;
        for(var i=0; i<arrLength; i++){
            sum+=arr[i];
        }
        avg = sum/arrLength;
        return avg;
    }
    throw "The array is either empty or does NOT include numbers";
}
var arr = [10,20];
console.log(arr.average());
// VALIDATIONS //
// the array MUST consist of NUMBERS only
// the array MUST NOT be EMPTY

// var array = ["j","a"];
// var array2 = [10.4,20.7];
// console.log(array.some(isNaN)); // true
// console.log(array2.some(isNaN)); // false


// doesn't work doubles //
// console.log(array.every(Number.isInteger)); // 
// console.log(array2.every(Number.isInteger)); // ALL of the array elements are NUMBERS


// console.log(Object.getOwnPropertyNames(Array.prototype));  --> logs all propertyNames of Array