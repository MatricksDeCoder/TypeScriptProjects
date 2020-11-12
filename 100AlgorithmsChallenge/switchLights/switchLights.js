function switchLights(a) {
    for (var i = 0; i < a.length; i++) {
        if (a[i] === 1) {
            var j = i;
            while (j >= 0) {
                a[i] = a[i] == 1 ? 0 : 1;
                j--;
            }
        }
    }
    return a;
}
console.log(switchLights([1, 1, 1, 1, 1])); //[0,1,0,1,0]
console.log(switchLights([0, 0])); //[0,0]
// if candle is lit, state candle and all before are changed
//[1,1,1,1,1]
//[0,1,1,1,1]
//[1,0,1,1,1]
//[0,1,0,1,1]
//[1,0,1,0,1]
//[0,1,0,1,0]
