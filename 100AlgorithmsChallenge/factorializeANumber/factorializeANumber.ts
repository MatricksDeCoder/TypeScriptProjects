function factorializeANumber(num: number): number {
    if(num <=1) {
        return num;
    }else {
        return num*factorializeANumber(num-1);
    }
}

console.log(factorializeANumber(5)); //120
console.log(factorializeANumber(10)); //3628800