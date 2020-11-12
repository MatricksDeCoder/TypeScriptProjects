//Below is O(n^2) need to come up with faster algorithm
function arrayMaxConsecutiveSum(inputArray, k) {
    var max = 0;
    for (var i = 0, len = inputArray.length; i < len - k + 1; i++) {
        var sum = 0;
        for (var j = i; j < i + k; j++) {
            sum += inputArray[j];
        }
        max = sum > max ? sum : max;
    }
    return max;
}
console.log(arrayMaxConsecutiveSum([2, 3, 5, 1, 6], 2)); //8
console.log(arrayMaxConsecutiveSum([2, 3, 5, 1, 6], 3)); //12
console.log(arrayMaxConsecutiveSum([2, 3, 5, 1, 6], 4)); //15
