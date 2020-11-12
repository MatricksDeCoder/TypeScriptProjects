function areSimilar(a, b) {
    if (a.length !== b.length) {
        return false;
    }
    var count = 0;
    for (var i = 0, len = a.length; i < len; i++) {
        if (a[i] !== b[i]) {
            count++;
        }
    }
    return count <= 2;
}
console.log(areSimilar([1, 2, 3], [1, 2, 3]));
console.log(areSimilar([1, 2, 3], [2, 1, 3]));
console.log(areSimilar([1, 2, 2], [2, 1, 1]));
