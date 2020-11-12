function alternatingSums(a) {
    var result = [0, 0];
    a.forEach(function (num, i) {
        i % 2 == 0 ? result[0] += num : result[1] += num;
    });
    return result;
}
console.log(alternatingSums([50, 60, 60, 45, 70]));
