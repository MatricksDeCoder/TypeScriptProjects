function addBorder(picture: string[]): string[] {
    let colSize = picture[0].length;
    let rowSize = picture.length;
    let wall    = '*'.repeat(colSize);
    picture.push(wall);
    picture.unshift(wall);
    return picture.map(elem => '*'+elem+'*');
}

console.log(addBorder(["abc", "ded"]));