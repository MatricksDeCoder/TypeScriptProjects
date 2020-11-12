//use modulo operator
function maxMultiple(divisor: number, bound: number): number  {
    return (Math.floor((bound-divisor)/divisor) + 1)*divisor;
}

console.log(maxMultiple(3,10));//9
console.log(maxMultiple(5,10));//10
console.log(maxMultiple(4,10));//8