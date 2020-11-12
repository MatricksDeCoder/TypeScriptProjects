function arrayMaximalAdjacentDifference(inputArray) {
    var maxAbsoluteDifference = 0;
    for (var i = 0, len = inputArray.length; i < len - 1; i++) {
        var currMax = Math.abs(inputArray[i] - inputArray[i + 1]);
        maxAbsoluteDifference = currMax > maxAbsoluteDifference ? currMax : maxAbsoluteDifference;
    }
    return maxAbsoluteDifference;
}
console.log(arrayMaximalAdjacentDifference([2, 4, 1, 0])); //3
