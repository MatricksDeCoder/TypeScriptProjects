function sumOddFibonacciNums(num) {
    var sum = 0;
    var first = 0;
    var second = 1;
    var curr = first + second;
    var results = [first, second];
    while (curr <= num) {
        curr = first + second;
        first = second;
        second = curr;
        if (curr <= num) {
            results.push(curr);
        }
    }
    return results.reduce(function (total, elem) { return total += elem % 2 != 0 ? elem : 0; });
}
console.log(sumOddFibonacciNums(1000)); //1785
console.log(sumOddFibonacciNums(4000000)); //4613732
console.log(sumOddFibonacciNums(10)); //10
