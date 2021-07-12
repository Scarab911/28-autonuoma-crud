class CarRental {
    constructor() {
        this.list = [];
    }
    intro() {
        let carCount = 0;
        console.log('');
        for (let i = 0; i < this.list.length; i++) {
            const car = this.list[i];
            if (car.working) {
                ++carCount;
            }

        }
        console.log(`<<<< Hi, we are CityBird and we have ${carCount} cars available >>>>`);
        console.log('')
    }

    addCar(name, color, price) {
        this.list.push({ name, color, price, working: true });
    }

    carPark() {
        console.log('***** CARS FOR RENT *****');
        for (let i = 0; i < this.list.length; i++) {
            const car = this.list[i];
            if (car.working) {

                console.log(`${i + 1}. ${car.name} (${car.color}) is for ${car.price}EUR/day`)
            }
        }
        console.log('**************************');
    };

    updateCarPrice(index, newPrice) {
        this.list[index].price = newPrice;
    };

    carAccident(index) {

        this.list[index].working = false;

    };

    carRepair(index) {

        this.list[index].working = true;
    };

    removeCar(index) {

        const updatedCarList = []

        for (let i = 0; i < this.list.length; i++) {
            const car = this.list[i];
            if (index !== i) {
                updatedCarList.push(car)
            }

        }
        this.list = updatedCarList;
    }
}

module.exports = CarRental;