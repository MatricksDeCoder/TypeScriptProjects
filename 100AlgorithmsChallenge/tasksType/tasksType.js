function tasksTypes(deadlines, day) {
    var result = [0, 0, 0];
    for (var i = 0, len = deadlines.length; i < len; i++) {
        var curr = deadlines[i];
        if ((curr - day) < 1) {
            result[0] += 1;
        }
        if ((curr - day) >= 1 && (curr - day) <= 7) {
            result[1] += 1;
        }
        if ((curr - day) > 7) {
            result[2] += 1;
        }
    }
    return result;
}
console.log(tasksTypes([1, 2, 3, 4, 5], 2)); // [2, 3, 0]
console.log(tasksTypes([1, 2, 4, 2, 10, 3, 1, 4, 5, 4, 9, 8], 1)); // [2, 8, 2]
