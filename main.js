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
  min.innerText = minRangeInput.value;
  max.innerText = maxRangeInput.value;
}


function getRandomArbitrary(newMinRange, newMaxRange) {
  return Math.random() * (max - min) + min;
}