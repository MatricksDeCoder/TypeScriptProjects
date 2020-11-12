function arrayReplace(inputArray, elemToReplace, substitutionElem) {
    return inputArray.map(function (elem) { return elem === elemToReplace ? elem = substitutionElem : elem; });
}
console.log(arrayReplace([1, 2, 1], 1, 3)); // [3,2,3]
