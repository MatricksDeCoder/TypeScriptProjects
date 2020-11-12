function avoidObstacles(inputArray: number[]): number {
 let maxJumps:number = inputArray.sort((a,b) => a-b)[inputArray.length-1]
 for(let i=1; i<=maxJumps; i++) {
    if(inputArray.every(elem => elem%i !==0)) {
        return i;
    }
 }

}

console.log(avoidObstacles([5, 3, 6, 7, 9]));//4