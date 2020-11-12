function isTandemRepeat(inputString: string): boolean {
    var len;
    return (len = inputString.length, len%2!==0)?false
           :inputString.slice(0,len/2)===inputString.slice(len/2);
                        
}

console.log(isTandemRepeat('tandemtandem'))//true
console.log(isTandemRepeat('qqq'))//false
console.log(isTandemRepeat('2w2ww'))//false
