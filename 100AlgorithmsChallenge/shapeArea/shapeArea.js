function shapeArea(n) {
    return (n * (1 + n * 2 - 1)) - (n * 2 - 1);
}
console.log(shapeArea(1)); //1
console.log(shapeArea(2)); //5
console.log(shapeArea(3)); //13
console.log(shapeArea(4)); //25
/*
it's adding odd numbers from start 1, (n*2-1) twice
subtract (n*2-1) which is added twice.
*/ 
