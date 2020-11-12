function makeArrayConsecutive2(statues: number[]): number {
    let count = 0;
    let toAdd:number[] = [];
    statues.sort((a,b) => a-b);
    for(let i=0; i<statues.length-1; i++) {
        let diff= statues[i+1]-statues[i];
        console.log(diff);
        if(diff > 1) {
            count+=(diff-1);
            toAdd = [...toAdd,...Array(diff-1).fill(statues[i]+1).map((elem,i) => elem+i)];
            console.log("Numbers to be added", toAdd);
        }
    }
    console.log(toAdd);
    return count;
}

console.log(makeArrayConsecutive2([6, 2, 3, 8])); //3 -> Add 4,5,7