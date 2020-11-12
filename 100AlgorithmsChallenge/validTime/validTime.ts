function validTime(time: string): boolean {
    const parts:string[] = time.split(":");
    return parseInt(parts[0])<24 && parseInt(parts[1])<=59;

}

console.log(validTime('13:58')); // true
console.log(validTime('25:51')); // false
console.log(validTime('02:76')); // false