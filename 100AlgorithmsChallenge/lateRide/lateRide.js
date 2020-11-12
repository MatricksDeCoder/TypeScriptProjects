function lateRide(n) {
    var hours = Math.floor(n / 60) % 60;
    var minutes = n % 60;
    console.log(hours + ":" + minutes);
    return Math.floor(hours / 10) + hours % 10 + Math.floor(minutes / 10) + minutes % 10;
}
console.log(lateRide(240)); //04:00 -> 4
console.log(lateRide(808)); //13:28 -> 14
