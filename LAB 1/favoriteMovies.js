// Create an array w/ your favorite movies:
// 1. copy the array into a different variables - DONE , COPY DON'T TAKE THE SAME REFERENCE
// 2. replace the 3rd element with a different movie - DONE
// 3. return the last array item in 3 different ways - DONE
// 4. add a new movie in the beginning - DONE

function CopyVariables(moviesArr){
    var moviesArr2 = Array.from(moviesArr);
    // var moviesArr2 = moviesArr;
    return moviesArr2;
    // console.log(moviesArr2);
}
function Replace3rdElement(moviesArr){
    var Arrlength = moviesArr.length-1;
    // console.log(Arrlength);
    var i = 0;
    for(i; i<=Arrlength; i++){
        // console.log(i);
        if(i==2){
            moviesArr[i]="Smile";
            return moviesArr;
        }
    }
}
function ReturnLastElement1(moviesArr){ // MANUALLY
    var Arrlength = moviesArr.length-1; // last element
    return moviesArr[Arrlength];
}
// SLICE does NOT modify the existing array
function ReturnLastElement2(moviesArr){ // SLICE (-1 gets the last element)
    var lastElement2 = moviesArr.slice(-1);
    return lastElement2;
}
function ReturnLastElement3(moviesArr){ // POP
    var lastElement3 = moviesArr.pop();
    moviesArr.push(lastElement3); // to avoid changing the array
    // console.log(moviesArr);
    return lastElement3;
}
function AddNewMovie(newMovie, moviesArr){ // UNSHIFT --> adds elements at the beginning of an array
    // var newMovie = "Ride Along";
    moviesArr.unshift(newMovie);
    return moviesArr;
}
var moviesArr = ["Home Alone", "The Fault In Our Stars", "The Notebook", "Passengers"];
// console.log(CopyVariables(moviesArr));
// console.log(Replace3rdElement(moviesArr));
// console.log(ReturnLastElement1(moviesArr));
// console.log(ReturnLastElement2(moviesArr));
console.log(ReturnLastElement3(moviesArr));
// var newMovie = "Ride Along";
// console.log(AddNewMovie(newMovie,moviesArr));


// console.log(AddNewMovie(moviesArr)); // OR initialize newMovie inside function