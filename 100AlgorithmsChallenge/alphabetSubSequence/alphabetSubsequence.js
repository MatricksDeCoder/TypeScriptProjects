function alphabetSubsequence(s) {
    //check if any char is repeated
    var result = true;
    if (s.split('').length !== new Set(s.split('')).size) {
        result = false;
    }
    else { //check if characters are in order
        for (var i = 0, len = s.length; i < len - 1; i++) {
            if (s[i + 1] < s[i]) {
                result = false;
                return result;
            }
        }
    }
    return result;
}
console.log(alphabetSubsequence('zab'));
console.log(alphabetSubsequence('effg'));
console.log(alphabetSubsequence('cdce'));
console.log(alphabetSubsequence('ace'));
console.log(alphabetSubsequence('bxz'));
