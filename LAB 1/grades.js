// Create a function that takes the following:
//     a- User name using prompt (*required*)
//     b- User Grades in one prompt in the format: “90,50,30,10”
//     Welcome the user by Name on console - DONE
//     and display grades as table on console - DONE
//     after that show the average grade of user’s grades.

function showGrades(userName,grades){
    console.log("Hi " + userName + "!");
    var gradesSplit = grades.split(',');
    // console.log(grades);
    // console.log(gradesSplit);
    // console.table(gradesSplit);
    // console.log(gradesSplit.length);
    var avg = 0;
    var sum = 0;
    var i = 0;
        // while(i<gradesSplit.length && typeof(gradesSplit[i])!='number'){
        //     i++;
        //     var numbersOnly = prompt("Please Enter numbers ONLY:");
        //     var gradesSplit = numbersOnly.split(',');
        // }
        // && isNaN(gradesSplit[0]) && isNaN(gradesSplit[1]) && isNaN(gradesSplit[2]) && isNaN(gradesSplit[3])
            while(gradesSplit.length !== 4){
                var grades = prompt("Please Enter 4 numbers:");
                var gradesSplit = grades.split(',');
            }                
                console.table(gradesSplit);
                for(i; i<gradesSplit.length; i++){
                    sum+=Number(gradesSplit[i]);
                    avg = Number(sum/gradesSplit.length);
                }
                return "Average = "+Number(avg);
    
}
var userName = prompt("Please enter your name:");
// var grades = [90,50,30,10];
var grades = prompt("Please Enter Your Grades:")
console.log(showGrades(userName,grades));