function containsCloseNums(nums: number[], k: number): boolean {
    let result = false;
    for(let i=0; i<nums.length; i++) {
        for(let j=0; j<nums.length; j++) {
            if(i!==j) {
                if(nums[i] === nums[j] && (Math.abs(i-j)<=k)) {
                    result = true;
                }
            }
        }
    }

    return result;
}

console.log(containsCloseNums([0, 1, 2, 3, 5, 2], 3));//true
console.log(containsCloseNums([0, 1, 2, 3, 5, 2], 2));//false
