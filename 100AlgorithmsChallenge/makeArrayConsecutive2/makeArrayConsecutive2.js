function makeArrayConsecutive2(statues) {
    var count = 0;
    var toAdd = [];
    statues.sort(function (a, b) { return a - b; });
    for (var i = 0; i < statues.length - 1; i++) {
        var diff = statues[i + 1] - statues[i];
        console.log(diff);
        if (diff > 1) {
            count += (diff - 1);
            toAdd = toAdd.concat(Array(diff - 1).fill(statues[i] + 1).map(function (elem, i) { return elem + i; }));
            console.log("Numbers to be added", toAdd);
        }
    }
    console.log(toAdd);
    return count;
}
console.log(makeArrayConsecutive2([6, 2, 3, 8])); //3 -> Add 4,5,7
