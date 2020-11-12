function integerToStringOfFixedWidth(number, width) {
    var len, str;
    return (str = number.toString(), len = number.toString().length) > width ?
        str.slice(len - width, len) :
        (len < width) ?
            Array(width - len).fill('0').join('') + str :
            str;
}
console.log(integerToStringOfFixedWidth(1234, 2)); //34
console.log(integerToStringOfFixedWidth(1234, 4)); //1234
console.log(integerToStringOfFixedWidth(1234, 5)); //01234
