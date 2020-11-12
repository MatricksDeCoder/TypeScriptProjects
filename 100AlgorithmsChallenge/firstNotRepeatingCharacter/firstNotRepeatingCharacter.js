function firstNotRepeatingCharacter(s) {
    var obj = {};
    var result = '_';
    var minIndex = Math.pow(10, 6);
    for (var i = 0; i < s.length; i++) {
        if (!obj[s[i]]) {
            obj[s[i]] = { repeats: 1, index: i };
        }
        else {
            obj[s[i]].repeats += 1;
            obj[s[i]].index = i;
        }
    }
    var arr = Object.values(obj);
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].repeats === 1) {
            minIndex = arr[i].index < minIndex ? arr[i].index : minIndex;
        }
    }
    result = minIndex < Math.pow(10, 6) ? s[minIndex] : result;
    return result;
}
console.log(firstNotRepeatingCharacter('abacabad')); //'c'
console.log(firstNotRepeatingCharacter('abacabaabacaba')); //'_'
