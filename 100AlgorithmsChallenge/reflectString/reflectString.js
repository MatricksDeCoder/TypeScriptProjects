/*
abcdefghijklmnopqrstuvwxyz
zyxwvutsrqponmlkjihgfedcba
sum opposites charCodes is 217 e.g (a+z) = (97 + 122) 219
e.g (b+y) = 98+121 = 219
*/
function reflectString(inputString) {
    var result = "";
    for (var i = 0; i < inputString.length; i++) {
        result += String.fromCharCode(219 - inputString.charCodeAt(i));
    }
    return result;
}
console.log(reflectString("name")); //"mznv"
