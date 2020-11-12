function confirmEnding(str: string, target: string) {
   let startIndex = str.length-target.length;
   return str.substr(startIndex) === target;
}

console.log(confirmEnding("Abstraction", "action"));//true
console.log(confirmEnding("Open sesame", "pen"));//false