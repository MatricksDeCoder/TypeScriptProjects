function uniqueDigitProducts(a: number[]): number {
    const products:number[] = a.map(num => num.toString()
                                              .split('')
                                              .reduce((elem1:any,elem2:any) => elem1*elem2,1))
    console.log(products);
    return new Set(products).size;
}

console.log(uniqueDigitProducts([2, 8, 121, 42, 222, 23])); //