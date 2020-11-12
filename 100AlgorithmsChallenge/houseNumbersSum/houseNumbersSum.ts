//for loop is cleaner
function houseNumbersSum(inputArray: number[]): number {
    let sum = 0; 
    let curr = inputArray[0];
    let i = 0;
    while(curr !== 0) {
        sum+=inputArray[i];
        i++;
        curr = inputArray[i];
    }
    return sum;
}

console.log(houseNumbersSum([5, 1, 2, 3, 0, 1, 5, 0, 2]));//11