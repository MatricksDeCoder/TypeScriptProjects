function checkPalindrome(inputString: string): boolean {
    return inputString.toLowerCase() === inputString.split('').reverse().join('');
}

console.log(checkPalindrome('aabaa'));//true
console.log(checkPalindrome('abac'));//false
console.log(checkPalindrome('a'));//true
