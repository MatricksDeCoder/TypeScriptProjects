function ratingThreshold(threshold: number, ratings: number[][]): number[] {
    let scores =  ratings.map(person => person.reduce((a,b)=> a+b,0))
                  .map((total,i)  => total/ratings[i].length)
    let fails  =  scores.filter(score => score < threshold);
    return fails.map(fail => scores.indexOf(fail));
}

console.log(ratingThreshold(3.5, 
    [[3, 4],
    [3, 3, 3, 4],
    [4]])); //[1]
console.log(ratingThreshold(3.5, 
        [[3, 4],
        [3, 3, 3, 4],
        [3]])); //[1,2]
+
console.log(ratingThreshold(3.5, 
            [[3, 3],
            [3, 3, 3, 4],
            [4]])); //[0,1]