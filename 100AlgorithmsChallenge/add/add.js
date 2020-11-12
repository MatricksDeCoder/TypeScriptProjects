function add(param1, param2) {
    return param1 + param2;
}
function add2(param1) {
    return param1.reduce(function (a, b) { return a + b; });
}
console.log(add(1, 2));
console.log(add(3, 2));
console.log(add2([1, 2, 3, 4, 5]));
console.log(add2([2, 3]));
