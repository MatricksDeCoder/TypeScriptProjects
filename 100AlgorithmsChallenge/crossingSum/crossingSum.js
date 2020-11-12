function crossingSum(matrix, a, b) {
    var rowSize = matrix.length;
    var colSize = matrix[0].length;
    var max = rowSize > colSize ? rowSize : colSize;
    var sum = 0;
    for (var i = 0; i < max; i++) {
        var horizontal = matrix[a][i];
        var vertical = matrix[i] ? matrix[i][b] : 0;
        sum += (horizontal + vertical);
    }
    return sum - matrix[a][b];
}
console.log(crossingSum([[1, 1, 1, 1],
    [2, 2, 2, 2],
    [3, 3, 3, 3]], 1, 3)); //12
console.log(crossingSum([[8, 1, 1, 1],
    [2, 2, 2, 2],
    [3, 3, 3, 3]], 1, 0)); //19
