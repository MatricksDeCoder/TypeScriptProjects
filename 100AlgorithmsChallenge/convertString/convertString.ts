function convertString(s: string, t: string): boolean {
    let result = false;
    let j=0;
    let word = "";
    for(let i=0; i<s.length; i++) {
        if(s[i] == t[j]) {
            word+=s[i];
            j++; 
        }
        if(word === t) {return true}
    }
    return result;
}

console.log(convertString('ceoydefthf5iyg5h5yts', 'codefights'));//true
console.log(convertString('addbyca', 'abcd'));//false
