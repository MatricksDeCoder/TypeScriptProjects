function composeRanges(nums: number[]): string[] {
    let result = [];
    let temp    ="";
    nums[1]-nums[0]===1?temp=nums[0]+"->":temp=nums[0]+"";

    for(let i=0; i<nums.length-1; i++) {
        if(nums[i+1]-nums[i] ==1) {
            temp+="";
        }else{
            temp+=nums[i];
            result.push(temp);
            nums[i+2]-nums[i+1]===1?temp=nums[i+1]+"->":temp=nums[i+1]+"";
        }
    }
    result.push(temp);

    return result;
}


console.log(composeRanges([-1, 0, 1, 2, 6, 7, 9]));//["-1->2", "6->7", "9"]