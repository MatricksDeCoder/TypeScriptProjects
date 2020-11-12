//doing it with one for loop instead of two
function crossingSum(matrix: number[][], a: number, b: number): number {
  let rowSize = matrix.length;
  let colSize = matrix[0].length;
  let max     = rowSize>colSize?rowSize:colSize;
  let sum     = 0
  for(let i=0; i<max; i++) {
      let horizontal =  matrix[a][i]
      let vertical   =  matrix[i]?matrix[i][b]:0
      sum += (horizontal + vertical)
  }
  return sum-matrix[a][b];
}

console.log(crossingSum([[1, 1, 1, 1], 
    [2, 2, 2, 2], 
    [3, 3, 3, 3]], 1, 3)); //12

console.log(crossingSum([[8, 1, 1, 1], 
        [2, 2, 2, 2], 
        [3, 3, 3, 3]], 1, 0)); //19