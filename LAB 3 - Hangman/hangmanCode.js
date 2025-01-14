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



// CHANGES //
// when I submit a letter, delete the letter from textbox AND autofocus


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

// Math.random() --> decimal numbers , 0.1  --> 5
// * fruitsString.length --> to get the range of the array
// Math.floor() --> integer only
var guessedWordF = fruitsString[Math.floor(Math.random() * fruitsString.length)];
var guessedWordC = colorsString[Math.floor(Math.random() * colorsString.length)];
var livesArr = [];
var fruitsFlag = true;
var colorsFlag = true;
var wrongLetters = [];
var dashesArr = [];
var guessedLetters = [];
var i = 0;

// deleting label+textbox for letters, hint/button, 2 audios //
document.getElementById("letters").style.display = "none";
document.getElementById("letterTextt").style.display = "none";
document.getElementById("letterID").style.display = "none";
document.getElementById("wrongLetters").style.display = "none";
document.getElementById("submitID").style.display = "none";
document.getElementById("hint").style.display = "none";
document.getElementById("CheeringAudio").style.display = "none";
document.getElementById("gameOverAudio").style.display = "none";

function dashGeneratorF(){
    for(i; i<guessedWordF.length; i++){ // insert dash according the random words's length
        dashesArr.push("-");
    }
    document.getElementById("dashes").textContent = dashesArr.join(' '); // converts every element to a string with a space bt. them
    return dashesArr;
}

function dashGeneratorC(){
    for(i; i<guessedWordC.length; i++){
        dashesArr.push("-");
    }
    document.getElementById("dashes").textContent = dashesArr.join(' ');
    return dashesArr;
}


function submitClick(){
    // document.getElementById("hangmanImg").style.display = "none"; // delete or keep ??
    var submittedVal = document.getElementById("letterID").value.toLowerCase();
    document.getElementById("letterID").value="";
    document.getElementById("letterID").focus();
    var j = 0;
    // var w = 0;
    var gameOverFlag = false;
    var wrongLet = true;

    // IF THE CATEGORY IS FRUITS //
    if(!fruitsFlag){ // if fruitsFlag = false --> the user chose the FRUITS cat.
        if(livesArr.length == 0){
            document.getElementById("gameOverAudio").play();
            alert("GAME OVER! You lost !!");
            gameOverFlag = true;
            // ************* RESET AND START AGAIN ************* //
            // document.getElementById("BothCategories").style.display = "inline";
            // document.getElementById("dashes").style.display = "none";
            reset();
        }
        if(wrongLetters.includes(submittedVal) && gameOverFlag == false){ // if the submittedVal is in the wrongLetters arr.
            wrongLet = false;
            alert("You've already guessed this letter !");
            return;
        }
        var specialChars = "[a-zA-Z]"; // validation --> to input only small & capital letters
        if(!(submittedVal.match(specialChars))){ // if submittedVal is NOT in specialChars, NOT a letter
            // console.log(submittedVal);
            alert("Please enter letters only !");
            document.getElementById("letterID").value = "";
            submittedVal = ""; // to clear the value
            return;
        }
        if(guessedLetters.includes(submittedVal) && gameOverFlag == false){ // if submittedVal is in guessedLetters
            alert("You've already guessed this letter !");
            // livesArr.pop();
            // document.getElementById("lives").textContent = livesArr.join(' ');    
            return;
        }
        for(j; j<guessedWordF.length; j++){
            if(submittedVal === guessedWordF[j]){
                    dashesArr[j] = submittedVal;
                    guessedLetters.push(submittedVal);
            }
        }  

        if(!dashesArr.includes('-')){ // NO DASHES, all letters guessed !!
            document.getElementById("CheeringAudio").play();
            alert("CONGRATS!! You've guessed "+"'"+guessedWordF+"' "+"successfully !!");
            setTimeout(reset, 5000);
        }
        if(!dashesArr.includes(submittedVal)){ // if submittedVal is NOT in dashesArr 
            // console.log("insideeee");
            if(gameOverFlag == false){
                    wrongLetters.push(submittedVal);
                    console.log(wrongLetters);
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
        if(livesArr.length == 0){
            document.getElementById("gameOverAudio").play();
            alert("GAME OVER! You lost !!");
            gameOverFlag = true;
            reset();
            // ************* RESET AND START AGAIN ************* //
        } 
        if(wrongLetters.includes(submittedVal) && gameOverFlag == false){
            alert("You've already guessed this letter !");
            return;
        }
        var specialChars = "[a-zA-Z]";
        if(!(submittedVal.match(specialChars))){
            alert("Please enter letters only !");
            document.getElementById("letterID").value = "";
            submittedVal = ""; // to clear the value
            return;
        }
        if(guessedLetters.includes(submittedVal) && gameOverFlag == false){
            alert("You've already guessed this letter !");
            // livesArr.pop();
            // document.getElementById("lives").textContent = livesArr.join(' ');    
            return;
        }
        for(j; j<guessedWordC.length; j++){
            if(submittedVal === guessedWordC[j]){
                    dashesArr[j] = submittedVal;
                    guessedLetters.push(submittedVal);
            }
        }
        if(!dashesArr.includes('-')){
            document.getElementById("CheeringAudio").play();
            alert("CONGRATS!! You've guessed "+"'"+guessedWordC+"' "+"successfully !!");
            setTimeout(reset, 5000); // to leave the word on screen for 5s
        }
        if(!dashesArr.includes(submittedVal)){
            if(gameOverFlag == false){
                wrongLetters.push(submittedVal);
                document.getElementById("wrongLettersInput").textContent = wrongLetters.join(' ');
                alert("Wrong Guess !");
                // DECREMENT LIVES //
                livesArr.pop();
                document.getElementById("lives").textContent = livesArr.join(' ');
            }
        }   
        document.getElementById("dashes").textContent = dashesArr.join(' ');
    }
}


    var timerFlag = false; // cause the timer was starting before clicking on anything !!
    function inputclick(){
        document.addEventListener('keydown', (event) => {
            time = 30;
            timerFlag = true;
            countdown();
        });
}
    
    var time = 30;
    var elem = document.getElementById('timerUpdate');
    var timerId = setInterval(countdown, 1000); // loops by default, works repeatedly, waits 1s then decrement
    // setInterval --> call the countdown() every second
    function countdown() {
        if(timerFlag){ // start counting when user choose a cat., cause it was counting before choosing a cat.
            if (time == -1) {
                clearInterval(timerId);
                // clearTimeout(timerId); //
                document.getElementById("gameOverAudio").play();
                alert("Time's Up! You lost");
                reset();
            } else if(time < 10){ // ex: 00:05 not 5 ONLY
                    elem.textContent = "00:"+"0"+time;
                    time--;
            }
                else{ // time >= 10 --> 00: ONLY
                elem.textContent = "00:"+time;
                time--;
            }
            }
        }

function selectFruitsCat(){ // onClick of FRUITS
    // ************* IF FRUITS CAT. IS CLICKED ************* //
    // ************* START TIME ************* // - DONE
    // ************* When I input a value, the time is being reset ************* // - DONE
    fruitsFlag = false;
    console.log(guessedWordF);
    document.getElementById('hintButton').addEventListener("click", function() { // eventListener of hint, when we click on it
        var hint = wordDefinition[guessedWordF]; // getting the definition(value) of the random word(key)
        document.getElementById("hint").textContent = "Hint: " + hint;    
        // clicked = true;
        // DECREMENT LIVES //
        livesArr.pop();
        document.getElementById("lives").textContent = livesArr.join(' ');
    });

    // DISPLAY WHAT WAS NOY DISPLAYED //
    // DON'T DISPLAY WHAT WAS IN THE MAIN MENU //
    document.getElementById("letters").style.display = "inline";
    document.getElementById("letterTextt").style.display = "inline";
    document.getElementById("letterID").style.display = "inline";
    document.getElementById("wrongLetters").style.display = "inline";
    document.getElementById("submitID").style.display = "inline";
    document.getElementById("hint").style.display = "inline";
    document.getElementById("hangmanImg").style.display = "none";
    document.getElementById("rules").style.display = "none";
    
    timerFlag = true;
    countdown(); // CALLING THE TIMER FN TO START COUNTING
    // fruitsFlag = false;
    dashGeneratorF(); // CALLING THE DASH GENERATOR TO INSERT DASHES

// DISPLAYING LIVES //
    var l = 0;
    for(l; l<6; l++){
        livesArr.push("🩷"); // push 6 lives in the arr.
    }
    document.getElementById("lives").textContent = livesArr.join(' ');
    var fruitMap = {Fruits:fruitsString}; 
// ************* DISPLAY "GUESS THE WORD" instead of "SELECT CATEGORY" ************* //   
    document.getElementById("selectCategory").textContent = "Guess The Word";
    document.getElementById("selectCategory").style.top = "180px";
    document.getElementById("selectCategory").style.left = "500px";
    document.getElementById("selectCategory").style.fontSize = "50px";
    document.getElementById("BothCategories").style.display = "none";
}

function selectColorsCat(){ // onClick of COLORS
    // ************* IF COLORS CAT. IS CLICKED ************* //
    // ************* START TIME ************* // - DONE
    // ************* When I input a value, the time is being reset ************* // - DONE

    console.log(guessedWordC);
    document.getElementById('hintButton').addEventListener("click", function() {
        var hint = wordDefinition[guessedWordC];
        document.getElementById("hint").textContent = "Hint: " + hint;
        // clicked = true;
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
    dashGeneratorC();
    var l = 0;
    for(l; l<6; l++){
        livesArr.push("🩷");
    }
    document.getElementById("lives").textContent = livesArr.join(' ');
    var colorMap = {Colors:colorsString};
// ************* DISPLAY "GUESS THE WORD" instead of "SELECT CATEGORY" ************* //   
    document.getElementById("selectCategory").textContent = "Guess The Word";
    document.getElementById("selectCategory").style.top = "180px";
    document.getElementById("selectCategory").style.left = "500px";
    document.getElementById("selectCategory").style.fontSize = "50px";
    document.getElementById("BothCategories").style.display = "none";
}

function reset(){
    location.href= "http://127.0.0.1:5500" ;
    // returns the href (URL) of the current page
}

