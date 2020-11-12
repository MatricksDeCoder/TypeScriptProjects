function fermactor(n: number): number[] {
    for(let i=1; i<n; i++) {
        for(let j=n-i;j>=1;j--) {
            if(j**2 - i**2 === n) {
                return [j,i]
            }
        }
    }

}

console.log(fermactor(15));//[4,1]