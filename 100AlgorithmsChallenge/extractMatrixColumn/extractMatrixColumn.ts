function extractMatrixColumn(matrix: number[][], column: number): number[] {
    let result = [];
    let numRows = matrix.length;
    for(let i=0;i<numRows;i++) {
        result.push(matrix[i][column]);
    }
    return result;
}

console.log(extractMatrixColumn([[1, 1, 1, 2], [0, 5, 0, 4], [2, 1, 3, 6]], 2));// [1, 0, 3]
console.log(extractMatrixColumn([[1, 1, 1, 2], [0, 5, 0, 4], [2, 1, 3, 6]], 1));// [1, 5, 1]
console.log(extractMatrixColumn([[1, 1, 1, 2], [0, 5, 0, 4], [2, 1, 3, 6]], 3));// [2, 4, 6]
console.log(extractMatrixColumn([[1, 1, 1, 2], [0, 5, 0, 4], [2, 1, 3, 6]], 0));// [1, 0, 2]