/*
function flattenArray(arr: any[]): any[] {
    return arr.flat(Infinity)
}
*/
function flattenArray(arr) {
    if (arr.every(function (elem) { return !Array.isArray(elem); }))
        return arr;
    else
        return flattenArray([].concat.apply([], arr));
}
console.log(flattenArray([[["a"]], [["b"]]]));
console.log(flattenArray([1, [2], [3, [[4]]]]));
