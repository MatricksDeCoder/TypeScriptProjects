function firstDuplicate(a) {
    var obj = {};
    for (var i = 0; i < a.length; i++) {
        if (!obj[a[i]]) {
            obj[a[i]] = 1;
        }
        else {
            obj[a[i]] += 1;
            return a[i];
        }
        console.log(obj);
    }
    return -1;
}
console.log(firstDuplicate([2, 1, 3, 5, 3, 2])); //3
console.log(firstDuplicate([2, 4, 3, 5, 1])); //-1
