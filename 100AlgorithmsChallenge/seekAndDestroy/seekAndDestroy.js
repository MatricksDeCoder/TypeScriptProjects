function seekAndDestroy(arr1, arr2) {
    return arr1.filter(function (elem) { return !arr2.includes(elem); });
}
console.log(seekAndDestroy([3, 5, 1, 2, 2], [2, 3, 5])); //[1]
console.log(seekAndDestroy([1, 2, 3, 5, 1, 2, 3], [2, 3])); //[1,5,1]
