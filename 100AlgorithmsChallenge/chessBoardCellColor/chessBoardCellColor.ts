function chessBoardCellColor(cell1: string, cell2: string): boolean {
    let letterPart1 = cell1[0].charCodeAt(0);
    let numberPart1 = Number(cell1[1]);
    let letterPart2 = cell2[0].charCodeAt(0);
    let numberPart2 = Number(cell2[1]);
    if(letterPart1 === letterPart2 ) {
        return Math.abs(numberPart1-numberPart2) %2 === 0;
    }else if(numberPart1 === numberPart2) {
        return Math.abs(letterPart1-letterPart2) %2 === 0;
    }else if(Math.abs(numberPart1-numberPart2)===Math.abs(letterPart1-letterPart2)) {
        return true;
    } else {
        return (Math.abs(numberPart1-numberPart2)-Math.abs(letterPart1-letterPart2))%2===0;
    }
}


console.log(chessBoardCellColor("A1", "C3")) //true.
console.log(chessBoardCellColor("A1", "H3")) //false