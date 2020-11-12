function proCategorization(pros, preferences) {
    var obj = {};
    for (var i = 0; i < preferences.length; i++) {
        var services = preferences[i];
        for (var j = 0; j < services.length; j++) {
            var service = services[j];
            if (obj[service]) {
                obj[service].push(pros[i]);
            }
            else {
                obj[service] = [pros[i]];
            }
        }
    }
    var result = [];
    for (var prop in obj) {
        result.push([[prop], obj[prop]]);
    }
    return result.sort();
}
console.log(proCategorization(["Jack", "Leon", "Maria"], [["Computer repair", "Handyman", "House cleaning"],
    ["Computer lessons", "Computer repair", "Data recovery service"],
    ["Computer lessons", "House cleaning"]]));
/*
[[["Computer lessons"], ["Leon", "Maria"]],
                                        [["Computer repair"], ["Jack", "Leon"]],
                                        [["Data recovery service"], ["Leon"]],
                                        [["Handyman"], ["Jack"]],
                                        [["House cleaning"], ["Jack", "Maria"]]]
*/
