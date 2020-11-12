/*
function flattenArray(arr: any[]): any[] {
    return arr.flat(Infinity)
}
*/

function flattenArray(arr: any[]) : any[] {
    if(arr.every(elem => !Array.isArray(elem))) return arr;
    else return flattenArray([].concat(...arr));
}

console.log(flattenArray([[["a"]], [["b"]]]));
console.log(flattenArray([1, [2], [3, [[4]]]]));
