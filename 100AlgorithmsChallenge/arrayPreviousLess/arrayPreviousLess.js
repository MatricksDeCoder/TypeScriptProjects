function arrayPreviousLess(items) {
    var result = items.slice();
    result[0] = -1;
    var min = items[0];
    for (var i = 1, len = items.length; i < len; i++) {
        for (var j = i - 1; j >= 0; j--) {
            min = items[j] < min ? items[j] : min;
        }
        min < items[i] ? result[i] = min : result[i] = -1;
    }
    return result;
}
console.log(arrayPreviousLess([3, 5, 2, 4, 5]));
