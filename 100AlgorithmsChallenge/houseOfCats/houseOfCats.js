function houseOfCats(legs) {
    var result = [];
    var maxPeople = Math.floor(legs / 2);
    console.log(maxPeople);
    while (maxPeople >= 0) {
        if (((legs - 2 * maxPeople) % 4) === 0) {
            result.unshift(maxPeople);
        }
        maxPeople--;
    }
    return result;
}
console.log(houseOfCats(6)); //[1,3]
console.log(houseOfCats(2)); //[1]
