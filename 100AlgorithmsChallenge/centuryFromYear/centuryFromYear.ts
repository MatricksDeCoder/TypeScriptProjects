function centuryFromYear(year: number): number {
    return Math.ceil(year/100);
}

console.log(centuryFromYear(1905));//20
console.log(centuryFromYear(1700));//17