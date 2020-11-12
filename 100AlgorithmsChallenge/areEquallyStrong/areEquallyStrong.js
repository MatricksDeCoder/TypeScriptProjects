function areEquallyStrong(yourLeft, yourRight, friendsLeft, friendsRight) {
    return ((yourLeft === friendsLeft && yourRight === friendsRight) ||
        (yourRight === friendsLeft && yourLeft === friendsRight));
}
console.log(areEquallyStrong(10, 15, 15, 10));
console.log(areEquallyStrong(15, 10, 15, 10));
console.log(areEquallyStrong(15, 10, 15, 9));
