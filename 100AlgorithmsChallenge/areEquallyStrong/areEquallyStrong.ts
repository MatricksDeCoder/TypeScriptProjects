function areEquallyStrong(yourLeft: number, 
                          yourRight: number, 
                          friendsLeft: number, 
                          friendsRight: number): boolean {
    
    return ((yourLeft === friendsLeft && yourRight === friendsRight) ||
            (yourRight === friendsLeft && yourLeft === friendsRight)
           )
}

console.log(areEquallyStrong(10, 15, 15, 10))
console.log(areEquallyStrong(15, 10, 15, 10))
console.log(areEquallyStrong(15, 10, 15, 9))
