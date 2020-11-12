//bubble sort 
function sortByHeight(a) {
    var result = a.filter(function (a) { return a != -1; }).sort(function (a, b) { return a - b; });
    var j = 0;
    for (var i = 0; i < a.length; i++) {
        if (a[i] != -1) {
            a[i] = result[j];
            j++;
        }
    }
    return a;
}
console.log(sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180]));
//[-1, 150, 160, 170, -1, -1, 180, 190]
