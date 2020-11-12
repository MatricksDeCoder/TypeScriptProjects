function candies(n, m) {
    return Math.floor(m / n) * n;
}
console.log(candies(3, 10)); //9
console.log(candies(4, 10)); //8
console.log(candies(13, 110)); //104
