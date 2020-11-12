function fermactor(n) {
    for (var i = 1; i < n; i++) {
        for (var j = n - i; j >= 1; j--) {
            if (Math.pow(j, 2) - Math.pow(i, 2) === n) {
                return [j, i];
            }
        }
    }
}
console.log(fermactor(15)); //[4,1]
