function palindromeRearranging(inputString: string): boolean {
    interface IObject {
        [key: string]: number
    }

    const obj: IObject = {};

    const len:number  = inputString.length;
    for(let i=0;i<len;i++) {
        let letter:string = inputString[i]
        if(obj[letter]) {obj[letter]++}
        else {obj[letter] = 1}
    }
    let values = Object.values(obj);
    if(len%2===0) {
       return values.every(num => num===2);
    }else {
        return values.filter(num => num===2).length !== (len-1) && values.filter(num=>num===1).length === 1;
    }

}

console.log(palindromeRearranging('aabb'));//true
console.log(palindromeRearranging('aabc'));//false
console.log(palindromeRearranging('aacbb'));//true