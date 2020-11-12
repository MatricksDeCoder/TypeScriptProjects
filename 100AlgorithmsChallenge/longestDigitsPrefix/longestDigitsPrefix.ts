function longestDigitsPrefix(inputString: string): any {

    let obj = {1:""};
    let j =   1;
    for(let i=0; i<inputString.length; i++) {
        if(parseInt(inputString[i])) {
            obj[j]+=inputString[i]
        } else {
            j++;
            obj[j] = "";
        }
    }
    
    let max = "";
    for(let prop in obj) {
        if(obj[prop].length > max.length) {
            max = obj[prop];
        }
    }

    return max;

}

console.log(longestDigitsPrefix('123aa1')); //"123".