function differentSymbolsNaive(s) {
    return new Set(s.split('')).size;
}
console.log(differentSymbolsNaive('cabca')); //
