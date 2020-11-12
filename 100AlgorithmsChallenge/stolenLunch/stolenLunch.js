"use strict";
exports.__esModule = true;
function stolenLunch(note) {
    var decipherDigit = function (char) { return /[0-9]/.test(char) ? String.fromCharCode(97 + parseInt(char)) : char; };
    var decipherChar = function (char) { return !/[0-9]/.test(char) ? char.charCodeAt(0) - 97 : char; };
    var split = note.split(':');
    var letters = split[0].trim().split('').map(function (char) { return decipherDigit(char); });
    var password = split[1].trim().split('').map(function (char) { return decipherChar(char); });
    return letters.join('') + ": " + password.join('');
}
console.log(stolenLunch("you'll n4v4r 6u4ss 8t: cdja"));
