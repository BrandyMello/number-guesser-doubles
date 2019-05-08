var minRange = 1;
var maxRange = 100;

var minRangeInput = document.getElementById('min-range-input');
var maxRangeInput = document.getElementById('max-range-input');

var updateButton = document.querySelector('.update-btn');



updateButton.addEventListener('click', updateRange);

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
  var randomNumber = Math.floor(Math.random() * (max - min) + min);
  console.log(randomNumber);
}



var chall1Name = document.querySelector("#chall1-name-input");

chall1Name.addEventListener('keyup', function(){
  validateNames(chall1Name);
});

var chall2Name = document.querySelector("#chall2-name-input");

chall2Name.addEventListener('keyup', function(){
  validateNames(chall2Name);
});

function validateNames(challName) {
  var regex = /^[0-9a-zA-Z]+$/;
  if(regex.test(challName.value)!==true){ 
    console.log("invalid name")
  }
}


var chall1Guess = document.querySelector("#chall1-guess-input");

chall1Guess.addEventListener('keyup', function(){
  validateGuess(chall1Guess);
});

var chall2Guess = document.querySelector("#chall2-guess-input");

chall2Guess.addEventListener('keyup', function(){
  validateGuess(chall2Guess);
});

function validateGuess(challGuess) {
  var regex = /^[0-9]+$/;
  if(regex.test(challGuess.value)!==true){
    console.log("invalid guess")
  }
}
