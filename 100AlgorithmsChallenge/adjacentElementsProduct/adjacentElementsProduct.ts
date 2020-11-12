function adjacentElementsProduct(inputArray: number[]): number {
    let maxProd = inputArray[0]*inputArray[1];
    for(let i=1; i<inputArray.length;i++) {
        let currProd = inputArray[i]*inputArray[i-1];
        maxProd = currProd > maxProd ? currProd: maxProd;
    }
    return maxProd;
}

console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3]));