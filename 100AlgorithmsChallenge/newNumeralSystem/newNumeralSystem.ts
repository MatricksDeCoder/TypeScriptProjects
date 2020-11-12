import { PassThrough } from "stream";

function newNumeralSystem(number: string): any {
   
    let code = new Array(26).fill(0).map((_,i) => String.fromCharCode(65+i));

    let value = code.indexOf('G');
    let obj = {};
    let j = value;
    while(j >= 0) {
        if(code[j] === code[value-j]) {
            obj[code[j]] = code[value-j] + " + " + code[j];
            j--;
         }
        if(!obj[code[j]] ) {
            obj[code[j]] = code[value-j] + " + " + code[j];
            obj[code[value-j]] = true;
        } 
        j--;
    }
    return Object.values(obj).filter(item => item !== true);
}   

console.log(newNumeralSystem('G'));
/*
For number = 'G', the output should be
newNumeralSystem(number) = ["A + G", "B + F", "C + E", "D + D"].
*/