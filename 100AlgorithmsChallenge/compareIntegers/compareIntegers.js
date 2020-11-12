function compareIntegers(a, b) {
    return parseInt(a) === parseInt(b) ? "equal" :
        parseInt(a) < parseInt(b) ? "less" : "greater";
}
console.log(compareIntegers('12', '13')); //less
console.log(compareIntegers('875', '799')); //greater
console.log(compareIntegers('1000', '1000')); //equal
