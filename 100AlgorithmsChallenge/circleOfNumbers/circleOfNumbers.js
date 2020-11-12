//Find the midpoint of data so we add the number and modulo to come back around circle
function circleOfNumbers(n, firstNumber) {
    return (Math.floor((n + 1) / 2) + firstNumber) % n;
}
//Draw circle
//Consider number on opposite side
//use if number is below halfway ornumber is above halfway
console.log(circleOfNumbers(10, 2)); //7
