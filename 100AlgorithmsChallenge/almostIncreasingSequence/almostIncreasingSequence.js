function almostIncreasingSequence(sequence) {
    var count = 0;
    for (var i = 0; i < sequence.length; i++) {
        if (sequence[i] <= sequence[i - 1]) {
            count++;
            if (sequence[i + 1] <= sequence[i - 1] && sequence[i] <= sequence[i - 2]) {
                return false;
            }
        }
    }
    return count <= 1;
}
console.log(almostIncreasingSequence([1, 3, 2, 1])); //false
console.log(almostIncreasingSequence([1, 3, 2])); //true
