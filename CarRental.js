class CarRental {
    constructor() {
        this.list = [];
        this.carsUnderRepair = []
    }
    intro() {
        console.log('');
        console.log(`<<<< Hi, we are CityBird and we have ${this.list.length} cars available >>>>`);
        console.log('')
    }
    addCar(name, color, price) {
        this.list.push({ name, color, price });
    }
    carPark() {
        // console.log('***** CARS FOR RENT *****');
        for (let i = 0; i < this.list.length; i++) {
            const car = this.list[i];
            console.log(`${i + 1}. ${car.name} (${car.color}) is for ${car.price}EUR/day`)
        }
        // console.log('**************************');
    };
    updateCarPrice(index, newPrice) {
        this.list[index].price = newPrice;
    };
    carAccident(index) {
        const updatedCarList = []

        for (let i = 0; i < this.list.length; i++) {
            const car = this.list[i];
            if (index === i) {
                this.carsUnderRepair.push(car)
            } else {
                updatedCarList.push(car)
            }
        }
        this.list = updatedCarList;
    };
    carRepair() {
        const addCar = [...this.carsUnderRepair, ...this.list];
        this.list = addCar;
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
        // const tempList = this.list.filter((car) => car !== index)
        // this.list = tempList
    }
}

module.exports = CarRental;