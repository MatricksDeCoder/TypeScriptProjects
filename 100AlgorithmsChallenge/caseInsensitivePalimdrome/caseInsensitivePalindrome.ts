function isCaseInsensitivePalindrome(inputString: string): boolean {
    return inputString.toLowerCase() === inputString.toLowerCase().split('').reverse().join('');
}

console.log(isCaseInsensitivePalindrome('AaBaa'));//true
console.log(isCaseInsensitivePalindrome('abac'));//false