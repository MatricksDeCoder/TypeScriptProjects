function boxBlur(image: number[][]): number[][] {
    let result = [];
    let colSize:number = image[0].length;
    let rowSize:number = image.length;

    for(let i=0; i<rowSize-2;i++) {
        let curr = [];
        for(let j=0; j<colSize-2; j++) {
            let sum = 0;
            let count = 0;
            for(let k=i; k<i+3;k++) {
                for(let l=j; l<j+3;l++) {
                    sum+= image[k][l]
                    count += 1;
                }
            }
            curr.push(Math.floor(sum/count));
        }
        result.push(curr);
    }
    return result;
}

let image = [[1, 1, 1], 
            [1, 7, 1], 
            [1, 1, 1]]

console.log(boxBlur(image))//[[1]]
