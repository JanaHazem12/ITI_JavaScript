// [2] Write a function to calculate the number of vowels in a string

var sumVowels = 0;
function calculateVowels(Stringgg){
    for(var i=0; i<Stringgg.length; i++){
        // const vowels = "aeiouAEIOU";
        if((Stringgg[i]=='a')|| (Stringgg[i]=='e') || (Stringgg[i]=='i') || (Stringgg[i]=='o') || (Stringgg[i]=='u') || (Stringgg[i]=='A')|| (Stringgg[i]=='E') || (Stringgg[i]=='I') || (Stringgg[i]=='O') || (Stringgg[i]=='U')){
            // OR if(vowels.includes(Stringgg[i])
            sumVowels+=1;
        }
    }
    return sumVowels;
    // console.log(sumDigits);
}

var Stringg = "aeiou";
var Stringgg = String(Stringg);
console.log("Sum of Vowels in "+ Stringgg+" = "+calculateVowels(Stringgg));

// var charVowels={a:0,e:0,i:0,o:0,u:0};
// function calcVowels(Stringgg){
//     for(var i=0; i<Stringgg.length; i++){
//         if(Object.keys(charVowels).includes(Stringgg[i]).toLowerCase()){
//             charVowels[Stringgg[i]].toLowerCase()++;
//         }
//     }
//     // console.log(charVowels);
//     return charVowels;
// }

// var Stringggg = "Aja";

// // console.log(charVowels)
// console.log(calcVowels(Stringggg));
// // console.log(charVowels)