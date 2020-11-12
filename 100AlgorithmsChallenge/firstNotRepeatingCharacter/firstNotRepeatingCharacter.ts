function firstNotRepeatingCharacter(s: string): string {
    interface IObject {
        [key:string]:{[key:string]:number}
    }
    let obj:IObject = {};
    let  result = '_';
    let  minIndex = 10**6;

    for(let i=0; i<s.length; i++) {
        if(!obj[s[i]]) {
            obj[s[i]] ={repeats:1, index:i};
        }else {
            obj[s[i]].repeats+=1;
            obj[s[i]].index = i;
        }
    }

    let arr = Object.values(obj);

    for(let i=0; i<arr.length; i++) {
        if(arr[i].repeats === 1) {
            minIndex = arr[i].index <minIndex?arr[i].index:minIndex;
        }
    }
    result = minIndex <10**6?s[minIndex]:result;
    return result;
}

console.log(firstNotRepeatingCharacter('abacabad'));//'c'
console.log(firstNotRepeatingCharacter('abacabaabacaba'));//'_'
