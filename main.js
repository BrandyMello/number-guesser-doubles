var minRange = 1;
var maxRange = 100;
var randomNumber

var minRangeInput = document.getElementById('min-range-input');
var maxRangeInput = document.getElementById('max-range-input');

var updateButton = document.querySelector('.update-btn');
var submitBtn = document.querySelector('#submit-btn');

var guess1 = document.querySelector("#chall1-guess-input");
var guess2 = document.querySelector("#chall2-guess-input");
var chall1Name = document.querySelector("#chall1-name-input");
var chall2Name = document.querySelector("#chall2-name-input");
var message1 = document.querySelector('.chall1-high-low');
var message2 = document.querySelector('.chall2-high-low');
var guess1Output = document.querySelector('.chall1-guess-output');
var guess2Output = document.querySelector('.chall2-guess-output');
var clearBtn = document.querySelector('#clear-btn');
var resertBtn = document.querySelector('#reset-btn');
var name1 = document.querySelector('.scoreboard-name1');
var name2 = document.querySelector('.scoreboard-name2');
var min = document.querySelector('.min-output');
var max = document.querySelector('.max-output');
// var guesses = document.querySelector('.guess')
// var messages = document.querySelector('.message')

clearBtn.addEventListener('click', clearGame);
updateButton.addEventListener('click', updateRange);
submitBtn.addEventListener('click', initiateGamePlay);
resertBtn.addEventListener('click', resetGame);


chall1Name.addEventListener('keyup', function(){
  validateNames(chall1Name);
});
chall2Name.addEventListener('keyup', function(){
  validateNames(chall2Name);
});
guess1.addEventListener('keyup', function(){
  validateGuess(guess1);
});
guess2.addEventListener('keyup', function(){
  validateGuess(guess2);
});

getRandomArbitrary(1, 100);

function updateRange(e) {
  e.preventDefault();
  var newMinRange = parseInt(minRangeInput.value);
  var newMaxRange = parseInt(maxRangeInput.value);
  min.innerText = newMinRange;
  max.innerText = newMaxRange;
  getRandomArbitrary(newMinRange, newMaxRange);
  minRangeInput.value = '';
  maxRangeInput.value  = '';
}

function getRandomArbitrary(min, max) {
  randomNumber = Math.floor(Math.random() * (max - min) + min);
  console.log(randomNumber);
  return randomNumber;
}

function validateNames(challName) {
  var regex = /^[0-9a-zA-Z]+$/;
  if(regex.test(challName.value)!==true){ 
    // console.log("invalid name")
  }
}

function validateGuess(challGuess) {
  var regex = /^[0-9]+$/;
  if(regex.test(challGuess.value)!==true){
    // console.log("invalid guess")
  }
}

function updateLatestScore() {
  name1.innerText = chall1Name.value;
  name2.innerText = chall2Name.value;
  guess1Output.innerText = guess1.value;
  guess2Output.innerText = guess2.value;
}

function initiateGamePlay(e) {
  e.preventDefault();
  updateLatestScore();
  compareGuess(guess1, message1);
  compareGuess(guess2, message2);
  clearGuesses();
}

function compareGuess(guess, message) {
  var guessInt = parseInt(guess.value);
  if (guessInt > randomNumber) {
      message.innerText = "That's too high";
  } else if (guessInt < randomNumber) {
      message.innerText = "That's too low"
  } else if (guessInt === randomNumber) {
      message.innerText = "BOOM!"
    }
  }

  function clearGuesses() {
    guess1.value = "";
    guess2.value = "";
  }

  function clearNames() {
    chall1Name.value = "";
    chall2Name.value = "";
  }

  function clearGame(e) {
    e.preventDefault();
    clearNames();
  }

  function resetScoreBoard() {
    name1.innerText = 'Challenge 1 Name';
    name2.innerText = 'Challenge 2 Name';
    guess1Output.innerText = 0;
    guess2Output.innerText = 0;
    message1.innerText = 'guess message';
    message2.innerText = 'guess message';  
  }

  function resetGame(e) {
    e.preventDefault();
    resetScoreBoard();
    clearNames();
    min.innerText = 1;
    max.innerText = 100;
    getRandomArbitrary(1, 100)
  }

  // function clearRange() {
  //   minRange = 1;
  //   maxRange = 100;
  // }
