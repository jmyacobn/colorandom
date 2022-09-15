//Global Variables~~~~~~~~~~~~~~~~~~~~
var characters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
var savedPalettes = [];

//Query Selectors~~~~~~~~~~~~~~~~~~~~
var texts = document.querySelectorAll('.text')
var locks = document.querySelectorAll('.lock');
var newButton = document.querySelector('.new-palette-button');
var fiveColorDisplay = document.querySelectorAll('.five-color-display');
var saveButton = document.querySelector('.save-palette-button');

//Event Listeners~~~~~~~~~~~~~~~~~~~~
window.addEventListener('load', displayRandomPalette);
newButton.addEventListener('click', displayRandomPalette);
for (var i = 0; i < locks.length; i++) {
  locks[i].addEventListener('click', toggleLock)
}
saveButton.addEventListener('click', displaySavedPalette);

//Functions and Event Handlers~~~~~~~~~~~~~~~~~~~~
function displaySavedPalette() {

}

function displayRandomPalette() {
  var newArray = []
    for (var i = 0; i < 5; i ++) {
      if (locks[i].innerText === '🔒') {
        newArray[i] = new Color(texts[i].innerText, true);
      } else {
        newArray[i] = new Color(generateCode());
      }
    }

  var newPalette = new Palette(newArray[0], newArray[1], newArray[2], newArray[3], newArray[4]);

  for (var i = 0; i < newPalette.colors.length; i ++) {
    document.getElementById(`sample-${i+1}`).style.backgroundColor = newPalette.colors[i].code;
    texts[i].innerText = newPalette.colors[i].code;
  }
};

function toggleLock() {
  for (var i = 0; i < locks.length; i ++) {
    if (event.target === locks[i]) {
      var lockStatus = document.querySelector(`.lock`);
      if (lockStatus.innerHTML === '🔓') {
        lockStatus.innerHTML = '🔒';
      } else {
        lockStatus.innerHTML = '🔓';
        }
      }
    }
  }

function generateCode() {
  var hexArray = []

for (var i = 0; i < 6; i ++) {
  hexArray.push(characters[makeRandomNumber(characters.length)]);
  var withHash = `#${hexArray.join('')}`;
  };
return withHash;
};

function makeRandomNumber(arrayLength) {
  return Math.floor(Math.random() * arrayLength);
};
