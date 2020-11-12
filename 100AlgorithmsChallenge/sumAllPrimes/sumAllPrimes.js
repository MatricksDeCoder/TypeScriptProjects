function sumAllPrimes(num) {
    if (num < 2) {
        return 0;
    }
    var sum = 2;
    var curr = 3;
    var noDivisor = true;
    while (curr <= num) {
        var j = 3;
        noDivisor = true;
        //console.log("Starting to check from: " ,j , "for the number", curr);
        while (j <= Math.ceil(Math.sqrt(curr))) {
            if (curr % j == 0) {
                noDivisor = false;
                //console.log("Oops you have a divisor", j, "for: ",curr);
                break;
            }
            j += 2;
            //console.log("We are good now checking: ", j);
        }
        sum += (noDivisor ? curr : 0);
        //console.log("Sum so far is: ", sum);
        curr += 2;
    }
    return sum;
}
console.log(sumAllPrimes(10)); //17
console.log(sumAllPrimes(17)); //41
console.log(sumAllPrimes(977)); //977
console.log(sumAllPrimes(2001)); //277050
console.log(sumAllPrimes(2000000)); //142913828922
