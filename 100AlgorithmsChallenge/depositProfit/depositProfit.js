/*logs
function depositProfit(deposit: number, rate: number, threshold: number): number {
    return Math.log(threshold/deposit) / Math.log(1+ (rate/100));
}
*/
function depositProfit(deposit, rate, threshold) {
    var years = 0;
    var value = deposit;
    while (value <= threshold) {
        value *= (1 + (rate / 100));
        years++;
    }
    return years;
}
console.log(depositProfit(100, 20, 170)); //3
