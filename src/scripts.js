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
saveButton.addEventListener('click', displaySavedPalette)

// Functions and Event Handlers~~~~~~~~~~~~~~~~~~~~
function displaySavedPalette () {
  savedPalettes.push(newPalette)
  // the above line pushed the newPalette instances into the savedPalettes array.Console.log(savedPalettes) on this line to see what I am talking about.
  // we need a for loop to iterate through the savedPalettes array, see below:
  for (var i = 0; i < savedPalettes.length; i++) {
    // now as we iterate throught the savedPalettes array, we need to acess 5 things from each newPalette instance that was saved in this array: we need the code of each of the 5 colors saved.
    // as you can see for the new palette array, we need: (you can console log each line below to see!) *** Side note: I thought about looping through the below but then we would have a nested for loop.
    savedPalettes[i].colors[0].code
    // this gives us the first color of the 5 colors code for the ith element in the savedPalettes array (aka the ith newPalette that was stored there)
    savedPalettes[i].colors[1].code
    // gives second color of the 5 codes
    savedPalettes[i].colors[2].code
    // gives third color of the 5 codes
    savedPalettes[i].colors[3].code
    // give fourth color of the 5 codes
    savedPalettes[i].colors[4].code
    // gives fifth color of the 5 codes
    // now we just have to take this 5 color codes of each newPalette and display them
    // I am thinking that we use the .innerHTML to create a new section with the unique id of the newPalette instance. In the new section we should have innerHTML that creates 5 sibling divs with the class of mini-palette so that we can size them all at once. Each of the 5 mini divs will also have .styling.backgroundColor
    miniPalettesSection.innerHTML = `
    <section id= ${savedPalettes[i].id}>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    </section>`
    //I am thinking of putting lines 46, 48, 50, 52, 54 equal to the .styling.backgroundColor for each div above. Similar to how we did it in line 92.
    // console.log(savedPalettes[i].id): this gives us the id for every newPalette instance in the savedPalettes array
  }
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
