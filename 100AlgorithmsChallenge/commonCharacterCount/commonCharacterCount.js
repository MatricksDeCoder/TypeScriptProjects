function commonCharacterCount(s1, s2) {
    var obj = {};
    for (var i = 0; i < s1.length; i++) {
        if (obj[s1[i]]) {
            obj[s1[i]] += 1;
        }
        else {
            obj[s1[i]] = 1;
        }
    }
    var count = 0;
    for (var j = 0; j < s2.length; j++) {
        if (obj[s2[j]] && obj[s2[j]] !== 0) {
            count++;
            obj[s2[j]] -= 1;
        }
    }
    return count;
}
console.log(commonCharacterCount('aabcc', 'adcaa')); //3
