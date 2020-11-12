"use strict";
exports.__esModule = true;
function newNumeralSystem(number) {
    var code = new Array(26).fill(0).map(function (_, i) { return String.fromCharCode(65 + i); });
    var value = code.indexOf('G');
    var obj = {};
    var j = value;
    while (j >= 0) {
        if (code[j] === code[value - j]) {
            obj[code[j]] = code[value - j] + " + " + code[j];
            j--;
        }
        if (!obj[code[j]]) {
            obj[code[j]] = code[value - j] + " + " + code[j];
            obj[code[value - j]] = true;
        }
        j--;
    }
    return Object.values(obj).filter(function (item) { return item !== true; });
}
console.log(newNumeralSystem('G'));
/*
For number = 'G', the output should be
newNumeralSystem(number) = ["A + G", "B + F", "C + E", "D + D"].
*/ 
