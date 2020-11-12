function squareDigitsSequence(a0) {
    var results = [];
    var count = 1;
    var formula = function (num) {
        var result = 0;
        var str = num.toString();
        for (var i = 0; i < str.length; i++) {
            result += Math.pow(parseInt(str[i]), 2);
        }
        return result;
    };
    var result = formula(a0);
    while (results.indexOf(result) === -1) {
        results.push(result);
        count++;
        result = formula(result);
        console.log("Curr result is: ", result, "Current count is ", count);
    }
    console.log("Result you have been seen before: ", result, " in array ", results);
    return count;
}
console.log(squareDigitsSequence(16)); //9
console.log(squareDigitsSequence(103));
4;
