var pString = "noon";
var i =0;
var j =pString.length-1;
var divBy = pString.length/2-1;
// n o o n
// 0 1 2 3
//   i j  --> STOP
// r o t a t o r
// 0 1 2 3 4 5 6
//     i   j    --> STOP
var lengthh = pString.length;
// console.log("length = " + lengthh)
function isPalindrome(pString){
    // console.log(pString);
    if(isNaN(pString) || !pString){ 
        //   console.log("inside if");
        while(i<lengthh && (i!=j || j!=i+1)){
            // console.log("i inside while = " + i);
            //   console.log("inside while");
            if((pString.charAt(i))===(pString.charAt(j))){
                //  console.log("inside ===");
                 i++;
                 j--;
                // if(i===j || j===i+1){
                //     console.log("inside ===");
                //     console.log("PALINDROME");
                //     return;
                // }
                // else{
                //     console.log("i = "+i);
                //     console.log("j = "+j);
                //     i++;
                //     j--;
                // }
            }
            else{
                console.log(pString + " is NOT PALINDROME");
                return;
            }
            // console.log("i = "+i);
            // console.log("j = "+j);
            // console.log("NOT PALINDROME !!");
            // return;
        }
        console.log(pString + " is PALINDROME");
    }
    else{
        console.log("the input string is either a NaN or an Empty string !!");
    }
}
console.log(isPalindrome(pString));