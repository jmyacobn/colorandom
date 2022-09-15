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
// var characters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F']
// //~~~~~~~~~~~~~~~~~~~~
// function generateCode() {
//   var hexArray = []
//
// for (var i = 0; i < 6; i ++) {
//   hexArray.push(characters[makeRandomNumber(characters.length)]);
//   var withHash = `#${hexArray.join('')}`;
//   };
// return withHash;
// };
// //~~~~~~~~~~~~~~~~~~~~
// function makeRandomNumber(arrayLength) {
//   return Math.floor(Math.random() * arrayLength);
// };
// //~~~~~~~~~~~~~~~~~~~~
// var randomCode = generateCode();
// //~~~~~~~~~~~~~~~~~~~~


var new1 = new Color(randomCode);
var new2 = new Color(randomCode);
var new3 = new Color(randomCode);
var new4 = new Color(randomCode);
var new5 = new Color(randomCode);

var newPalette = new Palette(new1, new2, new3, new4, new5)

console.log(newPalette);
