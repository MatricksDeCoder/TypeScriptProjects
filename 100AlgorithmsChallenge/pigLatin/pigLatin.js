function pigLatin(str) {
    var result = "";
    var regex = /[aeiou]/i;
    if (regex.test(str[0])) {
        return str + "way";
    }
    else {
        var i = 0;
        while (!regex.test(str[i])) {
            result += str[i];
            i++;
        }
        console.log(i);
        return str.slice(i) + result + "ay";
    }
}
console.log(pigLatin("glove")); //oveglay
console.log(pigLatin("eight")); //eightway
