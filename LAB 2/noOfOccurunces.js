// [3] Write a function to calculate the number of occurrences of a character in a string

var sumOccurunces = 0;
function calculateVowels(Stringg,char){
    for(var i=0; i<Stringg.length; i++){
        if(Stringg[i]==char){
            sumOccurunces+=1;
        }
    }
    return sumOccurunces;
}

var word = "aaabb";
var char = 'a';
var Stringg = String(word);
console.log("Number of occurunces of "+ char+" in "+word+ " = "+calculateVowels(Stringg,char));

