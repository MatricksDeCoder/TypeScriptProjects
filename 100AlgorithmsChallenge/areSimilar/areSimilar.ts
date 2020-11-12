function areSimilar(a: number[], b: number[]): boolean {
   if(a.length !== b.length) {return false}
   let count:number = 0;
   for(let i=0, len=a.length; i<len;i++) {     
    if(a[i] !== b[i]) {count++}       
   }
   return count <= 2;
}

//can still optmisze above to not run the entire array and stop
// when count > 2

console.log(areSimilar([1, 2, 3], [1, 2, 3]));
console.log(areSimilar([1, 2, 3], [2, 1, 3]));
console.log(areSimilar([1, 2, 2], [2, 1, 1]));
