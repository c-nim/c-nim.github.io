//MAIN HEADING
let mainHeading = document.getElementById('main-heading');
let mainHeadLetters = mainHeading.innerHTML.split('');
//console.log(mainHeadLetters)

//create a function to make text a random color
function randomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
console.log(randomColor())

//make random color get assigned to element

function setRandomColor(event) {
    event.target.style.color = randomColor();
};
function colorReturn(event) {
    event.target.style.color = '';
};
//make list of the letters (span elements class name color-letter)

let letterList = document.getElementsByClassName('color-letter')

//function that handles the event (event handler)

function colorOnEvent(letter) {
    letter.addEventListener('mouseover', setRandomColor)
    letter.addEventListener('mouseout', colorReturn)
}

// loop over list return letter
    for (let i = 0; i < letterList.length; i++) {
        let letter = letterList[i];
        colorOnEvent(letter)
    }

// ------- SECRET MESSAGE ------

//turn boxes into variables
let boxOne = document.getElementById('box-1');
let boxTwo = document.getElementById('box-2');
let boxThree = document.getElementById('box-3');
let boxFour = document.getElementById('box-4');
let boxFourText = document.getElementById('box-4-text');
let boxFive = document.getElementById('box-5');
let boxSixText = document.getElementById('box-6-text');
let boxSevenText = document.getElementById('box-7-text');
let resetButton = document.getElementById('reset');

boxOne.addEventListener('click', function(){
    boxOne.style.color = 'white';
});

boxTwo.addEventListener('click', function(){
    boxThree.style.visibility = 'visible'
})

boxFour.addEventListener('mouseout', function(){
    boxFourText.innerHTML = 'secret'
})

boxFive.addEventListener('click', function(){
    boxFive.style.transform = 'rotate(360deg)'
})

window.addEventListener('keydown', function(){
    boxSixText.innerHTML = 'well'
})

window.addEventListener('keyup', function(){
    boxSevenText.innerHTML = 'done'
})

function reset() {
    boxOne.style.color = '';
    boxThree.style.visibility = '';
    boxFourText.innerHTML = 'hmmm';
    boxFive.style.transform = '';
    boxSixText.innerHTML = 'hold a key down';
    boxSevenText.innerHTML = 'release';
}

resetButton.addEventListener('click', reset)

// ------- ROCK, PAPER, SCISSORS ------

//get computer result

    function getCompResult() {
        let compResult = Math.floor(Math.random()* 3);
        if (compResult === 0) {
            compResult = 'rock'
        } else if (compResult === 1) {
            compResult = 'paper'
        } else {compResult = 'scissors'}
        return compResult
    }

    let pickRock = document.getElementById('rock-button')
    let pickPaper = document.getElementById('paper-button')
    let pickScissors = document.getElementById('scissors-button')
    let gameContainer = document.getElementById('game-container')
    let winContainer = document.getElementById('win-container')
    let loseContainer = document.getElementById('lose-container')
    let resetGame = document.getElementsByClassName('resetGameButton')
    
    //get player result
    let playerResult = ''

    pickRock.addEventListener('click', function(){
        playerResult ='rock';
        showResult();
    })
    pickPaper.addEventListener('click', function(){
        playerResult = 'paper';
        showResult();
    })
    pickScissors.addEventListener('click', function(){
        playerResult = 'scissors';
        showResult();
    })
    

    //function to determine gameResult

    function getGameResult () {
        let gameResult = ''
        let compResult = getCompResult()
        if (playerResult === compResult) {
            gameResult = 'draw'
        } else if (playerResult === 'scissors' && compResult === 'paper'){
            gameResult = 'win'
        } else if (playerResult === 'paper' && compResult === 'rock'){
            gameResult = 'win'
        } else if (playerResult === 'rock' && compResult === 'scissors'){
            gameResult = 'win'
        } else {gameResult = 'lose'}
        console.log(gameResult)    
        return gameResult  

    }
    
    //function to use gameResult to show the result at end

    function showResult() {
        let gameResult = getGameResult();
        gameContainer.style.display = 'none';
        if (gameResult === 'win' || gameResult === 'draw') {
            winContainer.style.display = 'flex';
            winContainer.style.backgroundColor = 'blue';
            for (let i= 0; i < resetGame.length; i++) {
                resetGame[i].style.display = 'block'
            }
            //resetGame.style.display = 'block';
        } else { loseContainer.style.display = 'flex';
            for (let i= 0; i < resetGame.length; i++) {
            resetGame[i].style.display = 'block'};
    }
}
    
    
//function to reset the game

for (let i= 0; i < resetGame.length; i++) {
    resetGame[i].addEventListener('click', function() {
        console.log('clicked')
        toResetTheGame()
    })
    }

function toResetTheGame() {
console.log('reset game') 
winContainer.style.display = 'none';
loseContainer.style.display = 'none';
for (let i= 0; i < resetGame.length; i++) {
    resetGame[i].style.display = 'none';
}
gameContainer.style.display = 'flex'   
}