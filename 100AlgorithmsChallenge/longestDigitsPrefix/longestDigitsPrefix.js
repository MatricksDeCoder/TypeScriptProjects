function longestDigitsPrefix(inputString) {
    var obj = { 1: "" };
    var j = 1;
    for (var i = 0; i < inputString.length; i++) {
        if (parseInt(inputString[i])) {
            obj[j] += inputString[i];
        }
        else {
            j++;
            obj[j] = "";
        }
    }
    var max = "";
    for (var prop in obj) {
        if (obj[prop].length > max.length) {
            max = obj[prop];
        }
    }
    return max;
}
console.log(longestDigitsPrefix('123aa1')); //"123".
