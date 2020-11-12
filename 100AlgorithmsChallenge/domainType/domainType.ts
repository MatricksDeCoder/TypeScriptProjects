function domainType(domains: string[]): string[] {
    interface IObject {
         [key:string]: string, 

    }

    const obj: IObject= {
         org:"organization", 
         com:"commercial", 
         net:"network", 
         info:"information"
    }

    return domains.map((domain:string) => {
       const seperated = domain.split('.');
       const part:string =  seperated[seperated.length-1];
       return obj[part]
    });

}

console.log(domainType(["en.wiki.org", "codefights.com", "happy.net", "code.info"]));
// ["organization", "commercial", "network", "information"].