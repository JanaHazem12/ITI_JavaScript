// [1] Write a function to calculate the sum of digits in a number


var sumDigits = 0;
function calculateSum(DigitStr){
    if(!isNaN(DigitStr)){
        for(var i=0; i<DigitStr.length; i++){
            sumDigits+=Number(DigitStr.charAt(i));
        }
        return sumDigits;
    // console.log(sumDigits);
    }
    else{
        console.log("not a number");
        return;
    }

}
var Digit = "66";
var DigitStr = String(Digit);
console.log(calculateSum(DigitStr));