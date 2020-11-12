function allLongestStrings(inputArray: string[]): string[] {
   let maxLength: number = 0;
   inputArray.forEach(elem  => elem.length > maxLength ? maxLength = elem.length : maxLength)
   return inputArray.filter(elem => elem.length === maxLength);
}

console.log(allLongestStrings(["aba", "aa", "ad", "vcd", "aba"]));