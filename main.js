var minRange = 1;
var maxRange = 100;
var randomNumber

var minRangeInput = document.getElementById('min-range-input');
var maxRangeInput = document.getElementById('max-range-input');

var updateButton = document.querySelector('.update-btn');
var submitBtn = document.querySelector('#submit-btn');

var chall2Guess = document.querySelector("#chall2-guess-input");
var chall1Guess = document.querySelector("#chall1-guess-input");
var chall2Name = document.querySelector("#chall2-name-input");
var chall2Name = document.querySelector("#chall2-name-input");
var chall1Name = document.querySelector("#chall1-name-input");


updateButton.addEventListener('click', updateRange);
submitBtn.addEventListener('click', updateLatestScore);

chall1Name.addEventListener('keyup', function(){
  validateNames(chall1Name);
});
chall2Name.addEventListener('keyup', function(){
  validateNames(chall2Name);
});
chall1Guess.addEventListener('keyup', function(){
  validateGuess(chall1Guess);
});
chall2Guess.addEventListener('keyup', function(){
  validateGuess(chall2Guess);
});

getRandomArbitrary(1, 100);

function updateRange(e) {
  e.preventDefault();
  var min = document.querySelector('.min-output');
  var max = document.querySelector('.max-output');
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
    console.log("invalid name")
  }
}

function validateGuess(challGuess) {
  var regex = /^[0-9]+$/;
  if(regex.test(challGuess.value)!==true){
    console.log("invalid guess")
  }
}

function updateLatestScore(e) {
  e.preventDefault();
  var name1 = document.querySelector('.scoreboard-name1');
  var name2 = document.querySelector('.scoreboard-name2');
  var guess1 = document.querySelector('.chall1-guess-output');
  var guess2 = document.querySelector('.chall2-guess-output');
  name1.innerText = chall1Name.value;
  name2.innerText = chall2Name.value;
  guess1.innerText = chall1Guess.value;
  guess2.innerText = chall2Guess.value;
}
