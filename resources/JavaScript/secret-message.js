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
//let boxSix = document.getElementById('box-6');
let boxSixText = document.getElementById('box-6-text');
//let boxSeven = document.getElementById('box-7');
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
