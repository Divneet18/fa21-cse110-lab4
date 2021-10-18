let statistcs = {
    redCars: 21,
    blueCars: 45,
    greenCars: 12,
    raceCars: 5,
    blackCars: 40,
    rareCars: 2
};

for (key in statistcs) {
    if (key.charAt(0) === 'r' || (statistcs[key] % 2) != 0) {
        console.log(key + " " + statistcs[key]);
    }
}

