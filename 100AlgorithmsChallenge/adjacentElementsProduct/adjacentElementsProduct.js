function adjacentElementsProduct(inputArray) {
    var maxProd = inputArray[0] * inputArray[1];
    for (var i = 1; i < inputArray.length; i++) {
        var currProd = inputArray[i] * inputArray[i - 1];
        maxProd = currProd > maxProd ? currProd : maxProd;
    }
    return maxProd;
}
console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3]));
