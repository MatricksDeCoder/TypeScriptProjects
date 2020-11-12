function fancyRide(l, fares) {
    var rides = ["UberX", "UberXL", "UberPlus", "UberBlack", "UberSUV"];
    var result = rides[rides.length - 1];
    for (var i = 0; i < fares.length; i++) {
        if (fares[i] * l > 20) {
            result = rides[i - 1];
            return result;
        }
    }
    return result;
}
console.log(fancyRide(30, [0.3, 0.5, 0.7, 1, 1.3])); //UberXL
