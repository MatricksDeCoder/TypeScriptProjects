function growingPlant(upSpeed: number, downSpeed: number, desiredHeight: number): number {
    let count:number = 0;
    let growth = 0;
    while(growth < desiredHeight) {
        count++;
        growth+=upSpeed;
        if(growth < desiredHeight) {
            growth-=downSpeed;
        }
    }
    return count;
}

console.log(growingPlant(100, 10, 910))//10;