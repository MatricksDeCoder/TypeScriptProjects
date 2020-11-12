function arrayConversion(inputArray) {
    function applyAlgo(arr, i) {
        if (arr.length === 1) {
            return arr;
        }
        else {
            var result = [];
            var first = void 0, second = void 0;
            if (i % 2 === 0) {
                for (var j = 0, len = arr.length; j < len; j += 2) {
                    first = arr[j];
                    second = arr[j + 1] === undefined ? 0 : arr[j + 1];
                    result.push(first + second);
                }
            }
            else {
                for (var j = 0, len = arr.length; j < len; j += 2) {
                    first = arr[j];
                    second = arr[j + 1] === undefined ? 1 : arr[j + 1];
                    result.push(first * second);
                }
            }
            i++;
            return applyAlgo(result, i);
        }
    }
    return applyAlgo(inputArray, 0)[0];
}
console.log(arrayConversion([1, 2, 3, 4, 5, 6, 7, 8]));
