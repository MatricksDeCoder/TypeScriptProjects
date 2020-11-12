function matrixElementsSum(matrix) {
    var sum = 0;
    var rowSize = matrix.length;
    var colSize = matrix[0].length;
    var below = Array(colSize).fill(false);
    for (var i = 0; i < rowSize; i++) {
        for (var j = 0; j < colSize; j++) {
            !below[j] ? sum += matrix[i][j] : sum += 0;
            if (!below[j]) {
                below[j] = !matrix[i][j];
            }
            console.log(matrix[i][j], ":", below, "Sum : ", sum);
        }
    }
    return sum;
}
console.log(matrixElementsSum([[0, 1, 1, 2],
    [0, 5, 0, 0],
    [2, 0, 3, 3]])); //9
