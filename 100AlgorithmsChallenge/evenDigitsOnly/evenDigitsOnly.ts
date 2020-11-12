function evenDigitsOnly(n: number): boolean {
    return n.toString().split('').every((elem:any) => elem%2===0);
}

console.log(evenDigitsOnly(248622));//true
console.log(evenDigitsOnly(642386));//false