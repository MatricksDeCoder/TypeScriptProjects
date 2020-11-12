function digitDegree(n: number): number {
    if(n<10) {
        return 0;
    }else {
        let num:number = n.toString().split('').reduce((a,b) => Number(a) + Number(b), 0)
        return 1 + digitDegree(num)
    }
}

console.log(digitDegree(5)); //0
console.log(digitDegree(10)); //1
console.log(digitDegree(91)); //2