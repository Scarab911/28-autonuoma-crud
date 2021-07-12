const CarRental = require('./CarRental');

const cityBird = new CarRental('CityBird');

cityBird.intro();
// Hi, we are CityBird and we have 0 cars available.

cityBird.addCar('Toyota Yaris', 'black', 25);
cityBird.addCar('Volvo S40', 'red', 20);
cityBird.addCar('Tesla 3', 'white', 40);

console.log(cityBird);

cityBird.intro();
// Hi, we are CityBird and we have 3 cars available.

cityBird.carPark();
// 1. Toyota Yaris (black) is for 25EUR/day.
// 2. Volvo S40 (red) is for 20EUR/day.
// 3. Tesla 3 (white) is for 40EUR/day.

cityBird.updateCarPrice(0, 22);

cityBird.carPark();
// 1. Toyota Yaris (black) is for 22EUR/day.
// 2. Volvo S40 (red) is for 20EUR/day.
// 3. Tesla 3 (white) is for 40EUR/day.

cityBird.carAccident(1);

cityBird.intro();
// Hi, we are CityBird and we have 2 cars available.

cityBird.carPark();
// 1. Toyota Yaris (black) is for 22EUR/day.
// 2. Tesla 3 (white) is for 40EUR/day.

cityBird.carRepair(1);

console.log(cityBird);

cityBird.intro();
// Hi, we are CityBird and we have 3 cars available.

cityBird.carPark();
// 1. Toyota Yaris (black) is for 22EUR/day.
// 2. Volvo S40 (red) is for 20EUR/day.
// 3. Tesla 3 (white) is for 40EUR/day.

cityBird.removeCar(0);

cityBird.updateCarPrice(1, 35);

cityBird.intro();
// Hi, we are CityBird and we have 2 cars available.

cityBird.carPark();
// 1. Volvo S40 (red) is for 20EUR/day.
// 2. Tesla 3 (white) is for 35EUR/day.