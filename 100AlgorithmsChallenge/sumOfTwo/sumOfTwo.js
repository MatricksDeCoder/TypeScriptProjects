function sumOfTwo(a, b, v) {
    var obj = {};
    for (var i = 0; i < a.length; i++) {
        if (!obj[v - a[i]]) {
            obj[v - a[i]] = true;
        }
    }
    console.log(obj);
    for (var j = 0; j < b.length; j++) {
        var check = b[j];
        console.log(obj[check], b[j]);
        if (obj[check]) {
            return true;
        }
    }
    return false;
}
console.log(sumOfTwo([1, 2, 3], [10, 20, 30, 0, 13, 14, 18], 42)); //false
console.log(sumOfTwo([1, 2, 3], [10, 20, 30, 40, 13, 14, 18], 42)); //true
