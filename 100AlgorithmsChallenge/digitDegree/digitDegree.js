function digitDegree(n) {
    if (n < 10) {
        return 0;
    }
    else {
        var num = n.toString().split('').reduce(function (a, b) { return Number(a) + Number(b); }, 0);
        return 1 + digitDegree(num);
    }
}
console.log(digitDegree(5)); //0
console.log(digitDegree(10)); //1
console.log(digitDegree(91)); //2
