function reverseAString(str) {
    var result = "";
    for (var i = 0, len = str.length; i < len; i++) {
        result = str[i] + result;
    }
    return result;
}
console.log(reverseAString('hello')); //'olleh'
console.log(reverseAString('Howdy')); //'ydwoH'
