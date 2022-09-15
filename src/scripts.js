//~~~~~~~~~~~~~~~~~~~~
// class Color {
//   constructor(code, locked) {
//     this.code = code;
//     this.locked = locked || false;
//   };
// };
// class Palette {
//   constructor(color1, color2, color3, color4, color5) {
//     this.color1 = color1.code;
//     this.color2 = color2.code;
//     this.color3 = color3.code;
//     this.color4 = color4.code;
//     this.color5 = color5.code;
//     this.id = Date.now();
//   }
// }
//~~~~~~~~~~~~~~~~~~~~
var characters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F']
var text1 = document.querySelector('#p1')
var text2 = document.querySelector('#p2')
var text3 = document.querySelector('#p3')
var text4 = document.querySelector('#p4')
var text5 = document.querySelector('#p5')
var locks = document.querySelectorAll('.lock')
var lock1 = document.querySelector('#lock1')
var lock2 = document.querySelector('#lock2')
var lock3 = document.querySelector('#lock3')
var lock4 = document.querySelector('#lock4')
var lock5 = document.querySelector('#lock5')
var newButton = document.querySelector('.new-palette-button')
//~~~~~~~~~~~~~~~~~~~~
window.addEventListener('load', displayRandomPalette);
newButton.addEventListener('click', displayRandomPalette);
lock1.addEventListener('click', toggleLock);
lock2.addEventListener('click', toggleLock);
lock3.addEventListener('click', toggleLock);
lock4.addEventListener('click', toggleLock);
lock5.addEventListener('click', toggleLock);
//~~~~~~~~~~~~~~~~~~~~
function displayRandomPalette() {

  var new1 = new Color(generateCode());
  var new2 = new Color(generateCode());
  var new3 = new Color(generateCode());
  var new4 = new Color(generateCode());
  var new5 = new Color(generateCode());

  var newPalette = new Palette(new1, new2, new3, new4, new5);

  text1.innerText = newPalette.color1;
  text2.innerText = newPalette.color2;
  text3.innerText = newPalette.color3;
  text4.innerText = newPalette.color4;
  text5.innerText = newPalette.color5;

  document.getElementById("sample-1").style.backgroundColor = newPalette.color1;
  document.getElementById("sample-2").style.backgroundColor = newPalette.color2;
  document.getElementById("sample-3").style.backgroundColor = newPalette.color3;
  document.getElementById("sample-4").style.backgroundColor = newPalette.color4;
  document.getElementById("sample-5").style.backgroundColor = newPalette.color5;
};

function toggleLock() {
  //Change emoji AND force boolean toggle
  for (var i = 0; i < locks.length; i ++) {
    if (event.target === locks[i]) {
      locks[i].innerText = '🔒'

    }
  }

}

// function makeRandomPalettes() {
//
// }
//


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
