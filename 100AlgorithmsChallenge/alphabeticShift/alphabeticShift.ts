
const charShift =  {
        a:"b",b:"c",c:"d",d:"e",e:"f",f:"g",g:"h",h:"i",i:"j",j:"k",
        k:"l",l:"m",m:"n",n:"o",o:"p",p:"q",q:"r",r:"s",
        s:"t",t:"u",u:"v",v:"w",w:"x",x:"y",y:"z",z:"a"
}

function alphabeticShift(inputString: string): string {
    var  result:string = "";
    for(let i=0, len=inputString.length; i<len;i++) {
        result+= charShift[inputString[i]]
    }
    return result;
}

console.log(alphabeticShift('crazy'));