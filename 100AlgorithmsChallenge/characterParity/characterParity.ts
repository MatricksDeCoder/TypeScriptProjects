function characterParity(symbol: string): string {
   return isNaN(Number(symbol))?"not a digit":Number(symbol)%2===0?"even":"odd";
}

console.log(characterParity('5'))//odd
console.log(characterParity('8'))//even
console.log(characterParity('q'))//not a digit
