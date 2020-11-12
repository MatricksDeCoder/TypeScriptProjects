function pagesNumberingWithInk(current, numberOfDigits) {
    var page = current;
    var left = numberOfDigits - page.toString().split('').length;
    while (left >= page.toString().split('').length) {
        page++;
        left -= page.toString().split('').length;
    }
    return page;
}
console.log(pagesNumberingWithInk(1, 5)); //5
console.log(pagesNumberingWithInk(21, 5)); // 22
var current = 8;
var numberOfDigits = 4;
console.log(pagesNumberingWithInk(current, numberOfDigits)); //10.
