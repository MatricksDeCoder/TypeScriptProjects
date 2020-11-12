function chunkyMonkey(arr, size) {
    var result = [];
    for (var i = 0, len = arr.length; i < len; i += size) {
        result.push(arr.slice(i, i + size));
    }
    return result;
}
console.log(chunkyMonkey(["a", "b", "c", "d"], 2)); // [["a", "b"], ["c", "d"]]
console.log(chunkyMonkey([0, 1, 2, 3, 4, 5], 4)); // [[0, 1, 2, 3], [4, 5]]
