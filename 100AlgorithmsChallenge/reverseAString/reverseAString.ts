function reverseAString(str: string): string {
    let result = "";
    for(let i=0, len=str.length;i<len;i++) {
        result = str[i] +result;
    }
    return result;
}

console.log(reverseAString('hello'));//'olleh'
console.log(reverseAString('Howdy'));//'ydwoH'