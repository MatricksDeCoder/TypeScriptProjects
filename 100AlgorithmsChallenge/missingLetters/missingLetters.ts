//Question not clear must it start with letter 'a' i  assummed that
function missingLetters(str: string): string {

    let result = undefined;

    if(str[0] !== 'a') { return 'a'}

    for(let i=0; i<str.length-1; i++) {
        if(str.charCodeAt(i+1) - str.charCodeAt(i) !==1) {
            return String.fromCharCode(str.charCodeAt(i) +1);
        }
    }

    return result;
}
console.log(missingLetters("bce")); //a
console.log(missingLetters("abce")); //d
console.log(missingLetters("abcdefghjklmno")); //i
console.log(missingLetters("abcdefghijklmnopqrstuvwxyz")); //undefined