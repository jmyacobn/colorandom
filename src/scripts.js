//~~~~~~~~~~~~~~~~~~~~
var characters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
var savedPalettes = [];
//~~~~~~~~~~~~~~~~~~~~
var text1 = document.querySelector('#p1');
var text2 = document.querySelector('#p2');
var text3 = document.querySelector('#p3');
var text4 = document.querySelector('#p4');
var text5 = document.querySelector('#p5');
var locks = document.querySelectorAll('.lock');
var lock1 = document.querySelector('#lock1');
var lock2 = document.querySelector('#lock2');
var lock3 = document.querySelector('#lock3');
var lock4 = document.querySelector('#lock4');
var lock5 = document.querySelector('#lock5');
var newButton = document.querySelector('.new-palette-button');
var fiveColorDisplay = document.querySelectorAll('.five-color-display');
var saveButton = document.querySelector('.save-palette-button');
//~~~~~~~~~~~~~~~~~~~~
window.addEventListener('load', displayRandomPalette);
newButton.addEventListener('click', displayRandomPalette);
lock1.addEventListener('click', toggleLock);
lock2.addEventListener('click', toggleLock);
lock3.addEventListener('click', toggleLock);
lock4.addEventListener('click', toggleLock);
lock5.addEventListener('click', toggleLock);
saveButton.addEventListener('click', displaySavedPalette);
//~~~~~~~~~~~~~~~~~~~~
function displaySavedPalette() {
  savedPalettes.push(fiveColorDisplay.childNode)
}

function displayRandomPalette() {
  if (lock1.innerText === '🔒') {
    var new1 = new Color(text1.innerText, true);
  } else {
    var new1 = new Color(generateCode());
  }
  if (lock2.innerText === '🔒') {
    var new2 = new Color(text2.innerText, true);
  } else {
    var new2 = new Color(generateCode());
  }
  if (lock3.innerText === '🔒') {
    var new3 = new Color(text3.innerText, true);
  } else {
    var new3 = new Color(generateCode());
  }
  if (lock4.innerText === '🔒') {
    var new4 = new Color(text4.innerText, true);
  } else {
    var new4 = new Color(generateCode());
  }
  if (lock5.innerText === '🔒') {
    var new5 = new Color(text5.innerText, true);
  } else {
    var new5 = new Color(generateCode());
  }

  var newPalette = new Palette(new1, new2, new3, new4, new5);

  text1.innerText = newPalette.colors[0].code;
  text2.innerText = newPalette.colors[1].code;
  text3.innerText = newPalette.colors[2].code;
  text4.innerText = newPalette.colors[3].code;
  text5.innerText = newPalette.colors[4].code;

  document.getElementById("sample-1").style.backgroundColor = newPalette.colors[0].code;
  document.getElementById("sample-2").style.backgroundColor = newPalette.colors[1].code;
  document.getElementById("sample-3").style.backgroundColor = newPalette.colors[2].code;
  document.getElementById("sample-4").style.backgroundColor = newPalette.colors[3].code;
  document.getElementById("sample-5").style.backgroundColor = newPalette.colors[4].code;
};

function toggleLock() {
  for (var i = 0; i < locks.length; i ++) {
    if (event.target === locks[i]) {
      var lockStatus = document.getElementById(`lock${i+1}`);
      if (lockStatus.innerHTML === '🔓') {
        lockStatus.innerHTML = '🔒';
      } else {
        lockStatus.innerHTML = '🔓';
        }
      }
    }
  }
//~~~~~~~~~~~~~~~~~~~~
function generateCode() {
  var hexArray = []

for (var i = 0; i < 6; i ++) {
  hexArray.push(characters[makeRandomNumber(characters.length)]);
  var withHash = `#${hexArray.join('')}`;
  };
return withHash;
};
//~~~~~~~~~~~~~~~~~~~~
function makeRandomNumber(arrayLength) {
  return Math.floor(Math.random() * arrayLength);
};
