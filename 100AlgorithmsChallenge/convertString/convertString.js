function convertString(s, t) {
    var result = false;
    var j = 0;
    var word = "";
    for (var i = 0; i < s.length; i++) {
        if (s[i] == t[j]) {
            word += s[i];
            j++;
        }
        if (word === t) {
            return true;
        }
    }
    return result;
}
console.log(convertString('ceoydefthf5iyg5h5yts', 'codefights')); //true
console.log(convertString('addbyca', 'abcd')); //false
