function maxMultiple(divisor, bound) {
    return (Math.floor((bound - divisor) / divisor) + 1) * divisor;
}
console.log(maxMultiple(3, 10)); //3
console.log(maxMultiple(5, 10)); //10
console.log(maxMultiple(4, 10)); //8
