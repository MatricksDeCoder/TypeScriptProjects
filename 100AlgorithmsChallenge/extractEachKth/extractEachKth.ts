function extractEachKth(inputArray:number[], k: number): number[] {
    return inputArray.filter((elem:any,i:number) => i!==(k-1));
}

console.log(extractEachKth([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3));
//[1,2,4,5,6,7,8,9,10]