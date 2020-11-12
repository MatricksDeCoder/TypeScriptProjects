function confirmEnding(str, target) {
    var startIndex = str.length - target.length;
    return str.substr(startIndex) === target;
}
console.log(confirmEnding("Abstraction", "action"));
console.log(confirmEnding("Open sesame", "pen"));
