function squareDigitsSequence(a0: number): number {
    let results:number[] = [];
    let count   = 1;
    const formula = (num) =>  {
        let result = 0;
        let str:string = num.toString();
        for(let i = 0; i<str.length; i++ ) {
            result += Math.pow(parseInt(str[i]),2);
        }
        return result;
    }
    let result = formula(a0);
    while(results.indexOf(result)=== -1) {
        results.push(result);
        count++;
        result = formula(result);
        console.log("Curr result is: ", result, "Current count is ", count)
    }
    console.log("Result you have been seen before: ", result, " in array ", results)
    return count;

}


console.log(squareDigitsSequence(16));//9
console.log(squareDigitsSequence(103));4
