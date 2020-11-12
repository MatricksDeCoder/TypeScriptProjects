function growingPlant(upSpeed, downSpeed, desiredHeight) {
    var count = 0;
    var growth = 0;
    while (growth < desiredHeight) {
        count++;
        growth += upSpeed;
        if (growth < desiredHeight) {
            growth -= downSpeed;
        }
    }
    return count;
}
console.log(growingPlant(100, 10, 910)); //10;
