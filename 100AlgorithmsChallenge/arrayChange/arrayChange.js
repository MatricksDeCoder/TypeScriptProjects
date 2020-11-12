function arrayChange(inputArray) {
    var count = 0;
    for (var i = 0; i < inputArray.length - 1; i++) {
        if (inputArray[i] >= inputArray[i + 1]) {
            var toAdd = inputArray[i] - inputArray[i + 1] + 1; //whats need to make i+1 greater
            inputArray[i + 1] = inputArray[i] + 1;
            count += toAdd;
        }
    }
    return count;
}
console.log(arrayChange([1, 1, 1])); //3
