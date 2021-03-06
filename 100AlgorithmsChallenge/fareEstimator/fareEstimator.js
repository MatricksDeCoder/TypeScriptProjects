function fareEstimator(ride_time, ride_distance, cost_per_minute, cost_per_mile) {
    return cost_per_minute.map(function (time, i) {
        return Math.round((time * ride_time + cost_per_mile[i] * ride_distance) * 10) / 10;
    });
}
console.log(fareEstimator(30, 7, [0.2, 0.35, 0.4, 0.45], [1.1, 1.8, 2.3, 3.5])); //[13.7, 23.1, 28.1, 38].
//(Cost per minute) * (ride time) + (Cost per mile) * (ride distance)
