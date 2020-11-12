import { defaultCipherList } from "constants";

function stolenLunch(note: string): string {

    const decipherDigit = char => /[0-9]/.test(char)? String.fromCharCode(97+parseInt(char)) : char
    const decipherChar  = char => !/[0-9]/.test(char)? char.charCodeAt(0)-97 :char 

    let split    = note.split(':');
    let letters  = split[0].trim().split('').map(char => decipherDigit(char))
    let password = split[1].trim().split('').map(char => decipherChar(char))
    return letters.join('')+": "+password.join('')
}

console.log(stolenLunch("you'll n4v4r 6u4ss 8t: cdja"));
//"you'll never guess it: 2390".