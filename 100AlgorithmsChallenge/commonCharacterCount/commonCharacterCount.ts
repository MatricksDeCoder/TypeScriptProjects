
function commonCharacterCount(s1:string, s2:string):number {
  interface IObject  {
      [key:string] :
       number
  }

  let obj:IObject = {}

  for(let i=0; i<s1.length;i++) {
      if(obj[s1[i]]) {
          obj[s1[i]] +=1;
      } else {
          obj[s1[i]] = 1;
      }
  }

  let count = 0;

  for(let j=0; j<s2.length;j++) {
      if(obj[s2[j]] && obj[s2[j]] !==0) {
          count++;
          obj[s2[j]] -=1;
      }
  }
  
  return count;
}


console.log(commonCharacterCount('aabcc', 'adcaa'));//3