function electionsWinners(votes, k) {
    var sortedVotes = votes.sort(function (a, b) { return a - b; });
    var leader = sortedVotes[sortedVotes.length - 1];
    var count = 0;
    for (var i = 0; i < votes.length; i++) {
        if (votes[i] + k > leader) {
            count++;
        }
    }
    return count;
}
console.log(electionsWinners([2, 3, 5, 2], 3)); //2
//[2,2,3,5]
