// Write a function that accept a sentence and return the longest word
// within the input
// Example : 'Web Development Tutorial'
// Output : 'Development'

function longestWord(sentence){
    var splitted = sentence.split(' '); // converts string into an array of the splitted words
    // ["Web", "Development", "Tutorial"]
    var max = 0;
    var getWord;
    var i = 0;
    while(i<splitted.length){
        // console.log("MAX = "+max);
        if(splitted[i].length > max){
            // console.log("splitted[i]= "+splitted[i] );
            max = splitted[i].length;
            getWord = splitted[i];
            i++;
        }
        else{
            i++;
        }
    }
    // I can NOT return splitted[i] --? INVALID
    return getWord;
}
var sentence = "Web Development Tutorial";
console.log(longestWord(sentence));