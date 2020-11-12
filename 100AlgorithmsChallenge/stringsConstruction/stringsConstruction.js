function stringsConstruction(a, b) {
    var obj = {};
    for (var i = 0; i < b.length; i++) {
        if (obj[b[i]]) {
            obj[b[i]] += 1;
        }
        else {
            obj[b[i]] = 1;
        }
    }
    var result = [];
    for (var i = 0; i < a.length; i++) {
        result.push(obj[a[i]]);
    }
    return result.sort(function (a, b) { return a - b; })[0];
}
console.log(stringsConstruction('abc', 'abccba')); //2
