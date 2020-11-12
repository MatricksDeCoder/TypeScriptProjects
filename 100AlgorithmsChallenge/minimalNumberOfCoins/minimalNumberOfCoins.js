function minimalNumberOfCoins(coins, price) {
    var j = coins.length - 1;
    var results = [];
    var count = 0;
    while (price > 0 && j >= 0) {
        if (price >= coins[j]) {
            price -= coins[j];
            count += 1;
            results.push(coins[j]);
        }
        else {
            j--;
        }
    }
    console.log(results);
    return count;
}
console.log(minimalNumberOfCoins([1, 2, 10], 28)); //6
