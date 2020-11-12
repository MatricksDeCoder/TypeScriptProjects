function bishopAndPawn(bishop: string, pawn: string): boolean {
    return ((bishop.charCodeAt(0)-pawn.charCodeAt(0)) === (Number(bishop[1])-Number(pawn[1])))
}

console.log(bishopAndPawn('a1', 'c3'));//true
console.log(bishopAndPawn('a2', 'c3'));//false
console.log(bishopAndPawn('a3', 'c3'));//false
console.log(bishopAndPawn('a8', 'c3'));//false
console.log(bishopAndPawn('h8', 'c3'));//true