
function almostIncreasingSequence(sequence: number[]): boolean {
    let count = 0;
    for(let i=0; i<sequence.length;i++) {
        if(sequence[i] <=sequence[i-1]) {
            count++;
            //can ignore i or i-1 
            if(sequence[i+1] <=sequence[i-1] && sequence[i] <=sequence[i-2]) {
                return false;
            }
        }
    }
    return count <=1;
}



console.log(almostIncreasingSequence([1, 3, 2, 1])) //false
console.log(almostIncreasingSequence([1, 3, 2])) //true