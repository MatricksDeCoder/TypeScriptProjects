function allLongestStrings(inputArray) {
    var maxLength = 0;
    inputArray.forEach(function (elem) { return elem.length > maxLength ? maxLength = elem.length : maxLength; });
    return inputArray.filter(function (elem) { return elem.length === maxLength; });
}
console.log(allLongestStrings(["aba", "aa", "ad", "vcd", "aba"]));
