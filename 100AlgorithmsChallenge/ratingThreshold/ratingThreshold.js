function ratingThreshold(threshold, ratings) {
    var scores = ratings.map(function (person) { return person.reduce(function (a, b) { return a + b; }, 0); })
        .map(function (total, i) { return total / ratings[i].length; });
    var fails = scores.filter(function (score) { return score < threshold; });
    return fails.map(function (fail) { return scores.indexOf(fail); });
}
console.log(ratingThreshold(3.5, [[3, 4],
    [3, 3, 3, 4],
    [4]])); //[[1]]
console.log(ratingThreshold(3.5, [[3, 4],
    [3, 3, 3, 4],
    [3]])); //[[1],[2]]
+console.log(ratingThreshold(3.5, [[3, 3],
    [3, 3, 3, 4],
    [4]])); //[[0],[1]]
