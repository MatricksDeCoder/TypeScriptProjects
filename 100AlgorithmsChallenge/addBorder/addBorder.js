function addBorder(picture) {
    var colSize = picture[0].length;
    var rowSize = picture.length;
    var wall = '*'.repeat(colSize);
    picture.push(wall);
    picture.unshift(wall);
    return picture.map(function (elem) { return '*' + elem + '*'; });
}
console.log(addBorder(["abc", "ded"]));
