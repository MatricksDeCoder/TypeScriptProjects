function uniqueDigitProducts(a) {
    var products = a.map(function (num) { return num.toString()
        .split('')
        .reduce(function (elem1, elem2) { return elem1 * elem2; }, 1); });
    console.log(products);
    return new Set(products).size;
}
console.log(uniqueDigitProducts([2, 8, 121, 42, 222, 23]));
