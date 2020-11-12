function palindromeRearranging(inputString) {
    var obj = {};
    var len = inputString.length;
    for (var i = 0; i < len; i++) {
        var letter = inputString[i];
        if (obj[letter]) {
            obj[letter]++;
        }
        else {
            obj[letter] = 1;
        }
    }
    var values = Object.values(obj);
    if (len % 2 === 0) {
        return values.every(function (num) { return num === 2; });
    }
    else {
        return values.filter(function (num) { return num === 2; }).length !== (len - 1) && values.filter(function (num) { return num === 1; }).length === 1;
    }
}
console.log(palindromeRearranging('aabb')); //true
console.log(palindromeRearranging('aabc')); //false
console.log(palindromeRearranging('aacbb')); //true
