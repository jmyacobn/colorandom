class Color {
  constructor(code, locked) {
    this.code = code;
    this.locked = locked || false;
  };
};
//var displayedColor1 = new Color(randomCode);

//~~~~~~~~~~~~~~~~~~~~
var characters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F']
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
//~~~~~~~~~~~~~~~~~~~~
var randomCode = generateCode();
//~~~~~~~~~~~~~~~~~~~~
