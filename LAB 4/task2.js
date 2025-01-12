// 2- When trying to convert an object to string, the output is always '[object object]'.
//   a- Change the default output for all objects to be 'This is an object'.
//     ex: 
//         var obj = {};
//         String(obj); // Output: 'This is an object'.

// b- Make String(obj) of only the following object return the content of the message while the all other objects still return 'This is an object'.
// var obj = { message: 'This is a message' };
// String(obj) // Output: 'This is a message'.


// toString is already there, so we OVERRIDE it
//                 2A                  //
Object.prototype.toString = function(){
    return 'This is an object';
}

var obj = {};
console.log(String(obj));
// console.log(Object.getOwnPropertyNames(Object.prototype)); --> logs all propertyNames of Object


//                 2B                  //
Object.prototype.toString = function(){
    if(Object.hasOwn(this, 'message')){ // hasOwn --> checks if this Objects has this specific property
        return 'This is a message';
    }
    return 'This is an object';
}

var objMsg = { message: 'Message 1' };
var obj = {};
console.log(String(obj)); // Output: 'This is a object'.
console.log(String(objMsg)); // Output: 'This is a message'.