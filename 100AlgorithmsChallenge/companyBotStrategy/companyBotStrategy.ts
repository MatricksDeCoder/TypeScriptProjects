function companyBotStrategy(trainingData: number[][]): number {
    let total:number = 0;
    let correct:number = 0;
    trainingData.forEach(elem => {
        if(elem[1]===1) {total+=elem[0];correct++}
    })
    return correct===0?0.0:total/correct;
}

console.log(companyBotStrategy([[3, 1], [6, 1], [4, 1], [5, 1]]));//4.5
console.log(companyBotStrategy([[4, 1], [4, -1], [0, 0], [6, 1]]));//5.0
console.log(companyBotStrategy( [[4, -1], [0, 0], [5, -1]]));//0.0
