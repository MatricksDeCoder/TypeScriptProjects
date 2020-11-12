function boxBlur(image) {
    var result = [];
    var colSize = image[0].length;
    var rowSize = image.length;
    for (var i = 0; i < rowSize - 2; i++) {
        var curr = [];
        for (var j = 0; j < colSize - 2; j++) {
            var sum = 0;
            var count = 0;
            for (var k = i; k < i + 3; k++) {
                for (var l = j; l < j + 3; l++) {
                    sum += image[k][l];
                    count += 1;
                }
            }
            curr.push(Math.floor(sum / count));
        }
        result.push(curr);
    }
    return result;
}
var image = [[1, 1, 1],
    [1, 7, 1],
    [1, 1, 1]];
console.log(boxBlur(image)); //[[1]]
