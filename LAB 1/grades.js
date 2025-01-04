// Create a function that takes the following:
//     a- User name using prompt (*required*)
//     b- User Grades in one prompt in the format: “90,50,30,10”
//     Welcome the user by Name on console - DONE
//     and display grades as table on console - DONE
//     after that show the average grade of user’s grades.

function showGrades(userName,grades){
    console.log("Hi " + userName + "!");
    console.table(grades); // display a TABLE in the console
    // console.log(grades[1]);
    // GET AVG GRADE // avg = sum / their number
    var avg = 0;
    var sum = 0;
    var i = 0;
    for(i; i<grades.length; i++){
        sum+=grades[i];
        avg = sum/grades.length;
    }
    // console.log("SUM = "+sum);
    // console.log("AVG = "+avg);
    return "Average = "+avg;
}
var userName = prompt("Please enter your name: ");
var grades = [90,50,30,10];
console.log(showGrades(userName,grades));