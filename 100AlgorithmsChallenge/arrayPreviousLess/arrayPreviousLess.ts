//Need to visit solution to relook question meaning?
function arrayPreviousLess(items: number[]): number[] {
    let result:number[] = [...items];
    result[0]           = -1;
    let min = items[0]
    for(let i:number=1, len=items.length; i<len;i++) {
        
        for(let j:number=i-1;j>=0;j--) {
            min = items[j] < min?items[j]:min
        }
        min<items[i]?result[i]=min:result[i]=-1;
    }
    return result;
}

console.log(arrayPreviousLess([3, 5, 2, 4, 5]));
//[-1, 3, -1, 2, 4]
//not sure if qeustion is 