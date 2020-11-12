function sumOddFibonacciNums(num: number): number {
    let sum:number = 0;
    let first:number = 0;
    let second:number = 1;
    let curr:number = first+second; 
    let results:number[] = [first, second]
    while(curr <= num) {
        curr = first + second;
        first = second;
        second = curr;
        if(curr <= num) {
            results.push(curr);
        }
    }
    return results.reduce((total:number,elem:number) => total += elem%2!=0?elem:0);
}

console.log(sumOddFibonacciNums(1000)); //1785
console.log(sumOddFibonacciNums(4000000)); //4613732
console.log(sumOddFibonacciNums(10)); //10