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

