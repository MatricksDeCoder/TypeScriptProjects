function launchSequenceChecker(systemNames, stepNumbers) {
    var obj = {};
    for (var i = 0; i < systemNames.length; i++) {
        if (!obj[systemNames[i]]) {
            obj[systemNames[i]] = [stepNumbers[i]];
        }
        else {
            obj[systemNames[i]].push(stepNumbers[i]);
        }
    }
    var result = true;
    for (var prop in obj) {
        var arr = obj[prop];
        for (var i = 0; i < arr.length - 1; i++) {
            if (arr[i + 1] < arr[i]) {
                result = false;
                return result;
            }
        }
    }
    return result;
}
console.log(launchSequenceChecker(["stage_1", "stage_2", "dragon", "stage_1", "stage_2", "dragon"], [1, 10, 11, 2, 12, 111]));
// true [1, 2], [10, 12], and [11, 111],
console.log(launchSequenceChecker(["stage_1", "stage_1", "stage_2", "dragon"], [2, 1, 12, 111]));
//false [2, 1], [12], and [111],
