function addTwoDigits(n: any): number {
    return Math.floor(parseInt(n) / 10) + parseInt(n) %10;
}

console.log(addTwoDigits(29));
console.log(addTwoDigits('a1'));