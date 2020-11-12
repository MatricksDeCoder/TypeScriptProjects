function isLucky(n) {
    var i, sum;
    var str = n + "";
    var j = str.length - 1;
    (i = +!!i, sum = +!!sum);
    while (i <= j) {
        (sum = sum + (+str[i] - (+str[j])), i++, j--);
    }
    return sum === 0;
}
console.log(isLucky(1230)); //true
console.log(isLucky(239017)); //false
