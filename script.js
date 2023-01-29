let computerGuess;
let userGuess = [];
let userGuessUpdate = document.getElementById("textoutput");
let userNumberUpdate = document.getElementById("inputBox")
let clickAudio = new Audio("audio file/game click.wav")


let winAudio = new Audio("audio file/win.mp3")
let looseAudio = new Audio("audio file/loose.wav")

// genrating a random number when page reload
const init = () => {
    computerGuess = Math.ceil(Math.random() * 100 + 1);
    console.log(computerGuess);
    document.getElementById("newGameButton").style.display = "none"
    document.getElementById("gameArea").style.display = "none"
}
document.addEventListener("load", init());

// reload the page for start the game again
let start = document.getElementById("newGameButton");
start.addEventListener('click', newGameReload)

function newGameReload() {
    clickAudio.play()
    window.location.reload();
}

// start new game
const startNewGame = () => {
    document.getElementById("newGameButton").style.display = "inline"
    userNumberUpdate.setAttribute("disabled", true)
};

/***************************************************************
 ---------------main logic of game----------------------
*****************************************************************/

let startGame = () => {
    document.getElementById("welcomeScreen").style.display = "none"
    document.getElementById("gameArea").style.display = "block"
}

// when user choose in easy mode
function easyMode() {
    clickAudio.play();
    maxGuess = 10;
    startGame();
}

// when user choose in hard mode
function hardMode() {
    clickAudio.play();
    maxGuess = 5;
    startGame();
}

// compare the number
const compareguess = () => {
    clickAudio.play();
    const userNumber = userNumberUpdate.value;
    userGuess = [...userGuess, userNumber]
    document.getElementById("guesses").innerHTML = userGuess

    // check the value low or high
    if (userGuess.length < maxGuess) {
        if (userNumber > computerGuess) {
            userGuessUpdate.innerHTML = "your guess is high &#128556;"
            userNumberUpdate.value = ""
        }
        else if (userNumber < computerGuess) {
            userGuessUpdate.innerHTML = "your guess is low &#128551;"
            userNumberUpdate.value = ""


        } else {
            winAudio.play();
            userGuessUpdate.innerHTML = "it's correct !! &#128515;"
            userNumberUpdate.value = ""
            startNewGame();

        }
    }
    else {
        if (userNumber > computerGuess) {
            looseAudio.play();
            userGuessUpdate.innerHTML = `you loose!!! &#128557; correct number was ${computerGuess}`;
            userNumberUpdate.value = ""
            startNewGame();

        }
        else if (userNumber < computerGuess) {
            looseAudio.play();
            userGuessUpdate.innerHTML = `you loose!!! &#128557; correct number was ${computerGuess}`;
            userNumberUpdate.value = ""
            startNewGame();


        } else {
            // winAudio.play();
            userGuessUpdate.innerHTML = "it's correct !!! &#128515;"
            userNumberUpdate.value = ""
            startNewGame();
        }
    }
    document.getElementById("attempts").innerHTML = userGuess.length;
}

let easyButton = document.getElementById("easy-button")
let hardButton = document.getElementById("hard-button")
userNumberUpdate.addEventListener('change', compareguess)
easyButton.addEventListener('click', easyMode)
hardButton.addEventListener('click', hardMode)


