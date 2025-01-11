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
var wordDefinition = {
    watermelon: "A large, sweet fruit with a hard green rind and juicy red or pink flesh filled with black seeds.",
    banana: "A long, curved fruit with a soft, sweet interior and a yellow peel.",
    avocado: "A creamy fruit with green flesh, often used in salads and guacamole.",
    grape: "A small, round fruit, typically purple, green, or red, often used to make wine.",
    pear: "A sweet fruit with a rounded base and tapering top, often green or yellow in color.",
    black: "The darkest color, the result of the absence of light.",
    pink: "A light shade of red, often associated with softness and delicacy.",
    yellow: "A bright and cheerful color, often associated with the sun and energy.",
    orange: "A color between red and yellow, often associated with warmth and enthusiasm.",
    red: "A bold and vibrant color, often associated with passion and intensity."
};
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
document.getElementById("hint").style.display = "none";

// document.getElementById("rules").style.display = "none";



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
    // document.getElementById("rules").style.display = "inline";
    document.getElementById("hangmanImg").style.display = "none";
    var submittedVal = document.getElementById("letterID").value.toLowerCase();
    var j = 0;
    var w = 0;
    var gameOverFlag = false;
    var isFound = false;
    // console.log("here");
    // console.log("ARRAY = "+dashesArr);
    // finished looping over dashesArr

    // IF THE CATEGORY IS FRUITS //
    if(!fruitsFlag){
        // console.log("fruits flag");
        // if(typeof(submittedVal)=='number'){
        //     console.log("A NUMBER");
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
        if(guessedLetters.includes(submittedVal) && gameOverFlag == false){
            // console.log(guessedLetters);
            alert("You've already guessed this letter !");
            // livesArr.pop();
            // document.getElementById("lives").textContent = livesArr.join(' ');    
            return;
        }
        for(j; j<guessedWordF.length; j++){
            if(submittedVal === guessedWordF[j]){
                    // if a correct letter is guessed twice --> sth is wrong when there's duplicate letters
                    // guessedLetters.push(submittedVal);
                    dashesArr[j] = submittedVal;
                    guessedLetters.push(submittedVal);
                    // isFound = true;
            }
            // if(isFound == false){
            //     livesArr.pop();
            //     document.getElementById("lives").textContent = livesArr.join(' ');
            // }
        }  
        // console.log(guessedLetters);
        // if(isFound == true){
        //     alert("You have already guessed this letter !");
        // }  
        // if(guessedLetters.includes(submittedVal)){
        //     // console.log(guessedLetters);
        //     alert("You have already guessed this letter !");
        //     return;
        // }
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
                document.getElementById("wrongLettersInput").textContent = wrongLetters.join(' ');
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
        if(guessedLetters.includes(submittedVal) && gameOverFlag == false){
            // console.log(guessedLetters);
            alert("You've already guessed this letter !");
            // livesArr.pop();
            // document.getElementById("lives").textContent = livesArr.join(' ');    
            return;
        }
        for(j; j<guessedWordC.length; j++){
            if(submittedVal === guessedWordC[j]){
                    dashesArr[j] = submittedVal;
                    guessedLetters.push(submittedVal);
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
    // var keyPressed = false;
    function inputclick(){
        document.addEventListener('keydown', (event) => {
            // keyPressed[event.key] = true;
            // console.log("keyDown");
            // keyPressed = true;
            time = 20;
            timerFlag = true;
            countdown();
        });
        // if(keyPressed == true){
        //     timerFlag = true;
        //     countdown();
        // }
    // test();
}
    
    var time = 20;
    var elem = document.getElementById('timerUpdate');
    var timerId = setInterval(countdown, 1000); // wait 1s then decrement
    function countdown() {
        if(timerFlag){ // user inputs a letter
            if (time == -1) {
                // elem.innerHTML = "00:00";
                clearTimeout(timerId);
                alert("Time's Up!");
                reset();
            } else if(time < 10){
                    elem.textContent = "00:"+"0"+time;
                    time--;
            }
                else{
                elem.textContent = "00:"+time;
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

    // document.getElementById("rules").style.display = "inline";
    console.log(guessedWordF);
    // wordDefinition.key(guessedWordF);
    // console.log(Object.keys(wordDefinition).includes(guessedWordF));

    // var clicked = false;
    document.getElementById('hintButton').addEventListener("click", function() {
        var hint = wordDefinition[guessedWordF];
        document.getElementById("hint").textContent = "Hint: " + hint;    
        clicked = true;
        console.log(livesArr);
        livesArr.pop();
        document.getElementById("lives").textContent = livesArr.join(' ');
        console.log(livesArr);
    });

    document.getElementById("letters").style.display = "inline";
    document.getElementById("letterTextt").style.display = "inline";
    document.getElementById("letterID").style.display = "inline";
    document.getElementById("wrongLetters").style.display = "inline";
    document.getElementById("submitID").style.display = "inline";
    document.getElementById("hint").style.display = "inline";
    document.getElementById("hangmanImg").style.display = "none";
    document.getElementById("rules").style.display = "none";
    
    
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
    // console.log(document.getElementById("selectCategory").style.top.textContent);
    document.getElementById("selectCategory").style.top = "180px";
    // console.log(document.getElementById("selectCategory").style.top);
    document.getElementById("selectCategory").style.left = "500px";
    // console.log(document.getElementById("selectCategory").style.fontSize.textContent);
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

    // document.getElementById("rules").style.display = "inline";
    console.log(guessedWordC);
    // console.log(Object.keys(wordDefinition).includes(guessedWordF));
    // var hint = wordDefinition[guessedWordC];
    document.getElementById('hintButton').addEventListener("click", function() {
        var hint = wordDefinition[guessedWordC];
        document.getElementById("hint").textContent = "Hint: " + hint;
        clicked = true;
        livesArr.pop();
        document.getElementById("lives").textContent = livesArr.join(' ');
    });
    document.getElementById("letters").style.display = "inline";
    document.getElementById("letterTextt").style.display = "inline";
    document.getElementById("letterID").style.display = "inline";
    document.getElementById("wrongLetters").style.display = "inline";
    document.getElementById("submitID").style.display = "inline";
    document.getElementById("hint").style.display = "inline";
    document.getElementById("hangmanImg").style.display = "none";
    document.getElementById("rules").style.display = "none";



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
    // console.log(document.getElementById("selectCategory").style.top.textContent);
    document.getElementById("selectCategory").style.top = "180px";
    // console.log(document.getElementById("selectCategory").style.top);
    document.getElementById("selectCategory").style.left = "500px";
    // console.log(document.getElementById("selectCategory").style.fontSize.textContent);
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

