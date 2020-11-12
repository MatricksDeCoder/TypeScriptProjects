function firstDigit(inputString: string): string {
    return inputString.match(/[0-9]/)[0];
}

console.log(firstDigit('var_1__Int'));//1
console.log(firstDigit('q2q-q'));//2
console.log(firstDigit('0ss'));//0
