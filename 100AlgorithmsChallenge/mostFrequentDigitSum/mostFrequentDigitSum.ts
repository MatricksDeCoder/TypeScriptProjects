function mostFrequentDigitSum(n: number): any {

    let result = {};
    let sXes   = [];
    while(n > 0 ) {
        let s_x    = n.toString().split('').reduce((accum, elem) => Number(accum) + Number(elem),0);
        if(!result[s_x]) {
            result[s_x] = 1;
        } else {
            result[s_x]+=1;
        }
        sXes.push(s_x);
        n -= s_x;
    }
    let max = 0;
    let output;
    for(let prop in result) {
        
        if(result[prop] > max) {
            max = result[prop];
            output = prop;
        }

    }

    return output;

}

console.log(mostFrequentDigitSum(88)); //9
console.log(mostFrequentDigitSum(8)); //8