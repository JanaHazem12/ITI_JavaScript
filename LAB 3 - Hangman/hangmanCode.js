// WORD
// array of strings - DONE
// take a random word - DONE
// dashes according to length - loop over the random word and print the dashes according the word's length - DONE

// check if the input letter is in this specific word (loop to compare char) if not --> display none (of hearts)
// if the letter is correct --> check it's in which dash, and replace it - DONE
// if the whole word is gotten --> print 'Congrats !'
//  --> if there's NO dashes, word is checked - DONE

// time - css
// decrement 30s when we choose a category
//  0s --> you lost
// reset with every letter

//  CATEGORY
// obj --> key, value - (category, words)
// map = {onClick of what ?? : fruitsString};
// how to get the value of the map ?? OnclickName("fruits")
// override guessedWordF when I choose color category


var fruitsString = ["watermelon", "banana", "avocado", "grape", "pear"];
var colorsString = ["black", "pink", "yellow", "orange", "red"];
var guessedWordF = fruitsString[Math.floor(Math.random() * fruitsString.length)];
var guessedWordC = colorsString[Math.floor(Math.random() * colorsString.length)];
var livesArr = [];
var fruitsFlag = true;
var colorsFlag = true;
var wrongLetters = [];
// console.log(guessedWordF);
// console.log(guessedWordC);
var dashesArr = [];
var guessedLetters = [];
var i = 0;
// console.log("guessed word = " + guessedWordF.length);

document.getElementById("letters").style.display = "none";
document.getElementById("letterTextt").style.display = "none";
document.getElementById("letterID").style.display = "none";
document.getElementById("wrongLetters").style.display = "none";
document.getElementById("submitID").style.display = "none";


// function hangmanGame(){}
function dashGeneratorF(){
    for(i; i<guessedWordF.length; i++){
        dashesArr.push("-");
    }
    document.getElementById("dashes").textContent = dashesArr.join(' ');
    // console.log(dashesArr);
    return dashesArr;
}

function dashGeneratorC(){
    for(i; i<guessedWordC.length; i++){
        dashesArr.push("-");
    }
    document.getElementById("dashes").textContent = dashesArr.join(' ');
    // console.log(dashesArr);
    return dashesArr;
}
// console.log(dashGenerator());

function submitClick(){
    var submittedVal = document.getElementById("letterID").value.toLowerCase();
    var j = 0;
    var w = 0;
    var gameOverFlag = false;
    // console.log("here");
    // console.log("ARRAY = "+dashesArr);
    // finished looping over dashesArr

    // IF THE CATEGORY IS FRUITS //
    if(!fruitsFlag){
        // console.log("fruits flag");
        // if(typeof(submittedVal)=='number'){
        //     console.log("A NUMBER");
        // }
        if(wrongLetters.includes(submittedVal)){
            alert("You've already guessed this letter !");
            return;
        }
        var specialChars = /[^a-zA-Z]/g;
        if(submittedVal.match(specialChars)){
            // console.log(submittedVal);
            alert("Please enter letters only !");
            document.getElementById("letterID").value = "";
            submittedVal = ""; // to clear the value
            // console.log(submittedVal);
            return;
        }
        // console.log("wrong letter = "+ wrongLetters);
        // if(submittedVal>=0 || submittedVal<=9){
        //     alert("Please enter letters only !");
        //     return;
        // }
        // if(submittedVal==" "){
        //     alert("Please enter letters only !");
        //     return;
        // }
        if(livesArr.length == 0){
            alert("GAME OVER! You lost !!");
            gameOverFlag = true;
            // ************* RESET AND START AGAIN ************* //
            // document.getElementById("selectCategory").style.display = "inline";
            // document.getElementById("BothCategories").style.display = "inline";
            // document.getElementById("dashes").style.display = "none";
            reset();
        }
        for(j; j<guessedWordF.length; j++){
            if(submittedVal === guessedWordF[j]){
                    // if a correct letter is guessed twice --> sth is wrong when there's duplicate letters
                    // guessedLetters.push(submittedVal);
                    // console.log(guessedLetters);
                    // if(!guessedLetters.includes(submittedVal)){
                        dashesArr[j] = submittedVal;
                    // }
                    // else{
                        // alert("You've already guessed this letter !");
                        // return;
                    // }
                    // guessedLetters.push(submittedVal);
                    // isguessed = true;
            }
        }    
        if(!dashesArr.includes('-')){ // NO DASHES, all letters guessed !!
            alert("CONGRATS!! You've guessed "+"'"+guessedWordF+"' "+"successfully !!");
            setTimeout(reset, 5000);
        }
        if(!dashesArr.includes(submittedVal)){
            console.log("insideeee");
            if(gameOverFlag == false){
                // console.log(wrongLetters.length);
                // for(w; w<6; w++){
                    // wrongLetters.push(submittedVal+", ");
                    wrongLetters.push(submittedVal);
                    console.log(wrongLetters);
                // }
                document.getElementById("wrongLettersInput").textContent = wrongLetters.join('');
                console.log(wrongLetters);
                alert("Wrong Guess !!");
                // DECREMENT LIVES //
                livesArr.pop();
                document.getElementById("lives").textContent = livesArr.join(' ');
            }
        }
        document.getElementById("dashes").textContent = dashesArr.join(' ');
    }

    // ************* IF THE CATEGORY IS COLORS ************* //
    if(!colorsFlag){
        // console.log("color flag");
        if(wrongLetters.includes(submittedVal)){
            alert("You've already guessed this letter !");
            return;
        }
        var specialChars = /[^a-zA-Z]/g;
        if(submittedVal.match(specialChars)){
            // console.log(submittedVal);
            alert("Please enter letters only !");
            document.getElementById("letterID").value = "";
            submittedVal = ""; // to clear the value
            // console.log(submittedVal);
            return;
        }
        if(livesArr.length == 0){
            alert("GAME OVER! You lost !!");
            gameOverFlag = true;
            reset();
            // ************* RESET AND START AGAIN ************* //
        } 
        for(j; j<guessedWordC.length; j++){
            if(submittedVal === guessedWordC[j]){
                    dashesArr[j] = submittedVal;
                    // guessedLetters.push(submittedVal);
                // console.log(dashesArr);
            }
        }
        if(!dashesArr.includes('-')){
            alert("CONGRATS!! You've guessed "+"'"+guessedWordC+"' "+"successfully !!");
            setTimeout(reset, 5000);
            // setTimeout(function(){reset()}, 5000);
        }
        if(!dashesArr.includes(submittedVal)){
            if(gameOverFlag == false){
                // wrongLetters.push(submittedVal+", ");
                wrongLetters.push(submittedVal);
                document.getElementById("wrongLettersInput").textContent = wrongLetters.join(' ');
                alert("Wrong Guess !");
                // console.log( document.getElementById("wrongLettersInput"));
                // console.log(wrongLetters);
                // DECREMENT LIVES //
                livesArr.pop();
                document.getElementById("lives").textContent = livesArr.join(' ');
            }
        }   
        document.getElementById("dashes").textContent = dashesArr.join(' ');
    }
}

// function test(){
//     console.log("TEST");
// }

// function countdownn(){
    // clearTimeout(timerId);

    var timerFlag = false; // cause the timer was starting before clicking on anything !!
    var keyPressed = false;
    function inputclick(){
        // console.log("INSIDE");
        // countdown();
        document.addEventListener('keydown', (event) => {
            // keyPressed[event.key] = true;
            // console.log("keyDown");
            keyPressed = true;
            time = 10;
            timerFlag = true;
            countdown();
        });
        if(keyPressed == true){
            timerFlag = true;
            countdown();
        }
    // test();
}
    
    var time = 10;
    var elem = document.getElementById('timerUpdate');
    var timerId = setInterval(countdown, 1000);
    function countdown() {
        // if(keyPressed == true){
        //     var time = 10;
        //     var elem = document.getElementById('timerUpdate');
        //     var timerId = setInterval(countdown, 1000);
        // }
        if(timerFlag){
            if (time == -1) {
                clearTimeout(timerId);
                alert("Time's Up!");
                reset();
            } else {
                elem.innerHTML = "00:"+time;
                time--;
            }
        }
    }
// }


function selectFruitsCat(){
    // ************* IF FRUITS CAT. IS CLICKED ************* //
    // ************* START TIME ************* // - DONE
    // ************* When I input a value, the time is being reset ************* // - DONE
    // ID = timerUpdate

    console.log(guessedWordF);
    document.getElementById("letters").style.display = "inline";
    document.getElementById("letterTextt").style.display = "inline";
    document.getElementById("letterID").style.display = "inline";
    document.getElementById("wrongLetters").style.display = "inline";
    document.getElementById("submitID").style.display = "inline";
    
    // time = 10;
    // document.getElementById("dashes").style.display = "inline";
    timerFlag = true;
    countdown();
    fruitsFlag = false;
    // console.log("FRUITS");
    dashGeneratorF();
    var l = 0;
    for(l; l<6; l++){
        livesArr.push("🩷");
    }
    document.getElementById("lives").textContent = livesArr.join(' ');
    var fruitMap = {Fruits:fruitsString};
    document.getElementById("selectCategory").textContent = "Guess The Word";
    document.getElementById("selectCategory").style.fontSize = "50px";
    document.getElementById("BothCategories").style.display = "none";
    // ************* DISPLAY "GUESS THE WORD" ************* //
    // document.getElementById("h1").textContent = guess;
    // var paragraph = document.getElementById("p");
    // var text = document.createTextNode("This just got added");
    // paragraph.appendChild(text);

    // console.log(fruitMap);
    // console.log(livesArr);
}

function selectColorsCat(){
    // ************* IF COLORS CAT. IS CLICKED ************* //
    // ************* START TIME ************* // - DONE
    // ************* When I input a value, the time is being reset ************* // - DONE

    console.log(guessedWordC);
    document.getElementById("letters").style.display = "inline";
    document.getElementById("letterTextt").style.display = "inline";
    document.getElementById("letterID").style.display = "inline";
    document.getElementById("wrongLetters").style.display = "inline";
    document.getElementById("submitID").style.display = "inline";

    timerFlag = true;
    countdown();
    colorsFlag = false;
    // console.log("COLORS");
    dashGeneratorC();
    var l = 0;
    for(l; l<6; l++){
        livesArr.push("🩷");
    }
    document.getElementById("lives").textContent = livesArr.join(' ');
    var colorMap = {Colors:colorsString};
    // var guess = "Guess The Word";
    document.getElementById("selectCategory").textContent = "Guess The Word";
    document.getElementById("selectCategory").style.fontSize = "50px";
    document.getElementById("BothCategories").style.display = "none";
    // ************* DISPLAY "GUESS THE WORD" ************* //
    // document.getElementById("h1").textContent = guess;
    // var paragraph = document.getElementById("p");
    // var text = document.createTextNode("This just got added");
    // paragraph.appendChild(text);

    // console.log(fruitMap);
    // console.log(livesArr);
}

function reset(){
    location.href= "http://127.0.0.1:5500" ;
}

