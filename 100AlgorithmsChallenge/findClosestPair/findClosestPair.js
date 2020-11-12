function findClosestPair(numbers, sum) {
    var min = 30000;
    var exists = false;
    for (var i = 0; i < numbers.length - 1; i++) {
        for (var j = i + 1; j < numbers.length; j++) {
            var add = numbers[i] + numbers[j];
            if (add === sum) {
                min = Math.abs(i - j) < min ? Math.abs(i - j) : min;
                exists = true;
            }
        }
    }
    if (exists) {
        return min;
    }
    ;
    return -1;
}
console.log(findClosestPair([1, 0, 2, 4, 3, 0], 5)); //2. 1
console.log(findClosestPair([2, 3, 7], 8)); //-1
