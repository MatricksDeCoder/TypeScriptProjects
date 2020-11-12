function mostFrequentDigitSum(n) {
    var result = {};
    var sXes = [];
    while (n > 0) {
        var s_x = n.toString().split('').reduce(function (accum, elem) { return Number(accum) + Number(elem); }, 0);
        if (!result[s_x]) {
            result[s_x] = 1;
        }
        else {
            result[s_x] += 1;
        }
        sXes.push(s_x);
        n -= s_x;
    }
    var max = 0;
    var output;
    for (var prop in result) {
        if (result[prop] > max) {
            max = result[prop];
            output = prop;
        }
    }
    return output;
}
console.log(mostFrequentDigitSum(88)); //9
console.log(mostFrequentDigitSum(8)); //0
