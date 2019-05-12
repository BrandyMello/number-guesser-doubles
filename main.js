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
var resetBtn = document.querySelector('#reset-btn');
var name1 = document.querySelector('.scoreboard-name1');
var name2 = document.querySelector('.scoreboard-name2');
var min = document.querySelector('.min-output');
var max = document.querySelector('.max-output');
var minErrorElem = document.querySelector('.min-above-max-error');

// var guesses = document.querySelector('.guess')
// var messages = document.querySelector('.message')

var displayArea = document.querySelector('.display');

clearBtn.addEventListener('click', clearGame);
updateButton.addEventListener('click', updateRange);
submitBtn.addEventListener('click', initiateGamePlay);
resetBtn.addEventListener('click', resetGame);

clearBtn.disabled = true;
resetBtn.disabled = true;

var inputTest = document.querySelectorAll('input');

getRandomArbitrary(1, 100);


function enableClearBtn(name) {
  if (name.value === "") {
  clearBtn.disabled = true; 
} else {clearBtn.disabled = false;}
}

function enableResetBtn(name) {
  if (name.value === "") {
  resetBtn.disabled = true; 
} else {resetBtn.disabled = false;}
}

chall1Name.addEventListener('keyup', function() {
  validateNames(chall1Name);
  enableClearBtn(chall1Name);
  enableResetBtn(chall1Name);
});

chall2Name.addEventListener('keyup', function() {
  validateNames(chall2Name);
  enableClearBtn(chall2Name);
  enableResetBtn(chall2Name);
});

guess1.addEventListener('keyup', function() {
  validateNumber(guess1);
  enableResetBtn(guess1);
});

guess2.addEventListener('keyup', function() {
  validateNumber(guess2);
  enableResetBtn(guess2);
});

minRangeInput.addEventListener('keyup', function() {
  validateNumber(minRangeInput);
  minAboveMaxError();

});

maxRangeInput.addEventListener('keyup', function() {
  validateNumber(maxRangeInput);
});

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

//consider adding number type in HTML
//Made keyup event listeners on min and max inputs and change name to validateNumber with parameter of num to make it dynamic for all the listeners
function validateNumber(num) {
  console.log("invalid guess")
  var regex = /^[0-9]+$/;
  if(regex.test(num.value)!==true){
    num.style.borderColor = '#DD1972';
  } else {
    num.style.borderColor = 'gray';
  }
}
//Thinking about it... not sure why we need the logical or part of the conditional
function minAboveMaxError() {
  var newMinRange = parseInt(minRangeInput.value);
  var newMaxRange = parseInt(maxRangeInput.value);
  if (newMinRange >= newMaxRange || minRange > maxRange) {
    minRangeInput.style.borderColor = '#DD1972';
    minErrorElem.removeAttribute('hidden');
  }
  if (newMinRange < newMaxRange) {
    minErrorElem.style.borderColor = 'gray';
    minErrorElem.setAttribute('hidden', true);
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
      appendCard();
//generate new random number -- keeping 1 - 100 or custom range?
    }
  }


  

function appendCard() {
  displayArea.innerHTML += `
    <article class="winnercard">
        <div class="card-headline">
          <span class="chall1-name-output">Challenger 1 Name </span> vs <span class="chall2-name-output">Challenger 2 Name</span>
        </div>
        <div class="card-winner">
          <h2>Challenger 2 Name</h2>
          <p class="font-light winner-tagline">WINNER</p>
        <div >
          <ul class="card-bottom"> 
            <li>
              <span class="guess-counter">23</span> GUESSES
            </li>
            <li>
              <span class="clock">1</span> MINUTES
            </li>
            <li>
              <button class="remove-card-btn">X</button>
            </li>
          </ul>
        </div> 
      </article> `

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
    clearBtn.disabled = true;
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





// function toggleClearBtn() {

//   clearBtn.disabled = !clearBtn.disabled;
// }
// }

  // function clearRange() {
  //   minRange = 1;
  //   maxRange = 100;
  // }
