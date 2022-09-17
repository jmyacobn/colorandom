// Global Variables~~~~~~~~~~~~~~~~~~~~
var characters = [
  '0',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  'A',
  'B',
  'C',
  'D',
  'E',
  'F'
]
var savedPalettes = []
var newPalette
// Query Selectors~~~~~~~~~~~~~~~~~~~~
var texts = document.querySelectorAll('.text')
var locks = document.querySelectorAll('.lock')
var newButton = document.querySelector('.new-palette-button')
var fiveColorDisplay = document.querySelectorAll('.five-color-display')
var saveButton = document.querySelector('.save-palette-button')
var miniPalettesSection = document.querySelector('.mini-palettes')

// Event Listeners~~~~~~~~~~~~~~~~~~~~
window.addEventListener('load', displayRandomPalette)
newButton.addEventListener('click', displayRandomPalette)
for (var i = 0; i < locks.length; i++) {
  locks[i].addEventListener('click', toggleLock)
}
saveButton.addEventListener('click', savePalette)

// Functions and Event Handlers~~~~~~~~~~~~~~~~~~~~
function savePalette () {
  savedPalettes.push(newPalette)
  displaySavedPalette()
}

function displaySavedPalette () {
  var savedPaletteHTML = ''
  for (var i = 0; i < savedPalettes.length; i++) {
    savedPaletteHTML += `
    <section class= single-mini-palette>
    <div class='mini-color-sample' style='background-color: ${savedPalettes[i].colors[0].code}'></div>
    <div class='mini-color-sample' style='background-color: ${savedPalettes[i].colors[1].code}'></div>
    <div class='mini-color-sample' style='background-color: ${savedPalettes[i].colors[2].code}'></div>
    <div class='mini-color-sample' style='background-color: ${savedPalettes[i].colors[3].code}'></div>
    <div class='mini-color-sample' style='background-color: ${savedPalettes[i].colors[4].code}'></div>
    <p class='delete-img'>🗑️</p>
    </section>`
  }
  miniPalettesSection.innerHTML = savedPaletteHTML
}

function displayRandomPalette () {
  var newArray = []
  for (var i = 0; i < 5; i++) {
    if (locks[i].innerText === '\uD83D\uDD12') {
      newArray[i] = new Color(texts[i].innerText, true)
    } else {
      newArray[i] = new Color(generateCode())
    }
  }

  newPalette = new Palette(
    newArray[0],
    newArray[1],
    newArray[2],
    newArray[3],
    newArray[4]
  )

  for (var i = 0; i < newPalette.colors.length; i++) {
    document.getElementById(
      `sample-${i + 1}`
    ).style.backgroundColor = newPalette.colors[i].code
    texts[i].innerText = newPalette.colors[i].code
  }
}

function toggleLock () {
  for (var i = 0; i < locks.length; i++) {
    if (event.target === locks[i]) {
      if (locks[i].innerHTML === '\uD83D\uDD13') {
        locks[i].innerHTML = '\uD83D\uDD12'
      } else {
        locks[i].innerHTML = '\uD83D\uDD13'
      }
    }
  }
}

function generateCode () {
  var hexArray = []

  for (var i = 0; i < 6; i++) {
    hexArray.push(characters[makeRandomNumber(characters.length)])
    var withHash = `#${hexArray.join('')}`
  }
  return withHash
}

function makeRandomNumber (arrayLength) {
  return Math.floor(Math.random() * arrayLength)
}
