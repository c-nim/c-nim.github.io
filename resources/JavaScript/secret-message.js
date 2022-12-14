//main heading
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

