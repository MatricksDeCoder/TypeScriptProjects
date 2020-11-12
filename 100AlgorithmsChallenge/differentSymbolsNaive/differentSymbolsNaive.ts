function differentSymbolsNaive(s: string): number {
    return new Set(s.split('')).size
}

console.log(differentSymbolsNaive('cabca'));//
