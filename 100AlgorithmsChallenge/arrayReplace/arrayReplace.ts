function arrayReplace(inputArray: number[], elemToReplace: number, substitutionElem: number): number[] {
   return inputArray.map(elem => elem===elemToReplace?elem=substitutionElem:elem)
}

console.log(arrayReplace([1, 2, 1], 1, 3)); // [3,2,3]