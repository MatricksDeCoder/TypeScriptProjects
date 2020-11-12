//bubble sort 
function sortByHeight(a: number[]): number[] {

    let result = a.filter(a => a!=-1).sort((a,b) => a-b);
    let j=0;
    for(let i=0; i< a.length; i++) {
        if(a[i] != -1) {
            a[i] = result[j];
            j++;
        }
    }
    return a;
}

console.log(sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180]));
//[-1, 150, 160, 170, -1, -1, 180, 190]