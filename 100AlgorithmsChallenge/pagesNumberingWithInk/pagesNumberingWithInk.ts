function pagesNumberingWithInk(current: number, numberOfDigits: number): number {
    
    let page = current;
    let left = numberOfDigits -page.toString().split('').length;
    
    while(left >= page.toString().split('').length) {
        page++;
        left -= page.toString().split('').length;
    }

    return page;
    
}


console.log(pagesNumberingWithInk(1, 5))//5
console.log(pagesNumberingWithInk(21, 5))// 22

let current = 8 ; let numberOfDigits = 4;
console.log(pagesNumberingWithInk(current, numberOfDigits))//10.
