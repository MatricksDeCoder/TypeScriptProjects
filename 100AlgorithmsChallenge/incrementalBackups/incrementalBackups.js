function incrementalBackups(lastBackupTime, changes) {
    return Array.from(new Set(changes.filter(function (change) { return change[0] > lastBackupTime; })
        .map(function (toBack) { return toBack[1]; })))
        .sort(function (a, b) { return a - b; });
}
console.log(incrementalBackups(461620205, [[461620203, 1],
    [461620204, 2],
    [461620205, 6],
    [461620206, 5],
    [461620207, 3],
    [461620207, 5],
    [461620208, 1]])); //[1,3,5]
