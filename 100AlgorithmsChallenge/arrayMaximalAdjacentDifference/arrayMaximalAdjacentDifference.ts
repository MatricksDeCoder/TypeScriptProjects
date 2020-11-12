function arrayMaximalAdjacentDifference(inputArray: number[]): number {
    let maxAbsoluteDifference = 0;
    for(let i=0, len=inputArray.length;i<len-1;i++) {
        let currMax = Math.abs(inputArray[i] - inputArray[i+1]);
        maxAbsoluteDifference = currMax>maxAbsoluteDifference?currMax:maxAbsoluteDifference;
    }
    return maxAbsoluteDifference;
}

console.log(arrayMaximalAdjacentDifference([2, 4, 1, 0]));//3