function stringsConstruction(a: string, b: string): number {
    interface IObject {
        [key:string]: number
    }

    let obj:IObject = {};

    for(let i=0; i<b.length; i++) {
        if(obj[b[i]]) {
            obj[b[i]]+=1;
        } else {
            obj[b[i]] = 1;
        }
    }
    let result = [];
    for(let i=0; i<a.length; i++) {
        result.push(obj[a[i]]);
    }


    return result.sort((a:number,b:number) => a-b)[0];
}

console.log(stringsConstruction('abc', 'abccba'));//2