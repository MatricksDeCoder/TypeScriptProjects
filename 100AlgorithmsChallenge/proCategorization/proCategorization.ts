function proCategorization(pros: string[], preferences: string[][]): any {
    interface IObject {
        [key:string]: string[]
    }

    let obj: IObject = {};

    for(let i=0; i< preferences.length; i++) {
        let services = preferences[i];
        for(let j =0; j<services.length; j++) {
            let service = services[j];
            if(obj[service]) {
                obj[service].push(pros[i])
            } else {
                obj[service] = [pros[i]];
            }
        }
    }
     
    let result = [];
    for(let prop in obj) {
        result.push([[prop], obj[prop]])
    }

    return result.sort();

}

console.log(proCategorization(["Jack", "Leon", "Maria"], [["Computer repair", "Handyman", "House cleaning"],
["Computer lessons", "Computer repair", "Data recovery service"],
["Computer lessons", "House cleaning"]]));

/*
[[["Computer lessons"], ["Leon", "Maria"]],
                                        [["Computer repair"], ["Jack", "Leon"]],
                                        [["Data recovery service"], ["Leon"]],
                                        [["Handyman"], ["Jack"]],
                                        [["House cleaning"], ["Jack", "Maria"]]]
*/

