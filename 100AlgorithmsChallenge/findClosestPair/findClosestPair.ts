function findClosestPair(numbers: number[], sum: number): number {
    let min    = 30000;
    let exists = false;
    for(let i=0; i<numbers.length-1; i++) {
        for(let j=i+1; j<numbers.length; j++) {
            let add = numbers[i]+numbers[j];            
            if(add === sum) {
                min = Math.abs(i-j)<min?Math.abs(i-j):min
                exists = true;
            }
        }
    }
    if(exists) {return min};
    return -1;   
}

console.log(findClosestPair([1, 0, 2, 4, 3, 0], 5));//2. 1
console.log(findClosestPair([2, 3, 7], 8));//-1