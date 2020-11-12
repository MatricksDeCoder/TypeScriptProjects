function electionsWinners(votes: number[], k: number): number {
    let sortedVotes:number[] = votes.sort((a,b) => a-b);
    let leader = sortedVotes[sortedVotes.length-1];
    let count = 0;
    for(let i=0; i<votes.length;i++) {
        if(votes[i] + k > leader) { count++;}
    }
    return count;
}

console.log(electionsWinners([2, 3, 5, 2], 3));//2
//[2,2,3,5]