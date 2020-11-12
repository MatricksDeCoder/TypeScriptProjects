function arrayConversion(inputArray: number[]): number {

    function applyAlgo(arr: number[], i:number): number[] {

        if(arr.length === 1) {
            return arr;
        } else {
            let result:number[] = [];
            let first,second:number;
            if(i%2===0) {
                for(let j:number=0, len:number= arr.length; j<len;j+=2) {
                    first = arr[j];
                    second = arr[j+1] === undefined?0:arr[j+1];
                    result.push(first+second);
                }
            }else {
                for(let j:number=0, len:number= arr.length; j<len;j+=2) {
                    first = arr[j];
                    second = arr[j+1] === undefined?1:arr[j+1];
                    result.push(first*second);
                }
            }
            i++;
            return applyAlgo(result, i);
        }
    }

    return applyAlgo(inputArray, 0)[0];

}

console.log(arrayConversion([1, 2, 3, 4, 5, 6, 7, 8]));
