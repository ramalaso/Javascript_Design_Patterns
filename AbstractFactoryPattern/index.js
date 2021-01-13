class Car {
    constructor(doors, engine, color) {
        this.doors = doors
        this.engine = engine
        this.color = color
    }
}

class CarFactory {
    createCar(type) {
        switch(type) {
            case 'civic':
                return new Car(4, 'V6', 'red')
            case 'honda':
                return new Car(2, 'V8', 'grey')
        }
    }
}

class SUV {
    constructor(doors, engine, color) {
        this.doors = doors
        this.engine = engine
        this.color = color
    }
}

class SUVFactory {
    createCar(type) {
        switch(type) {
            case 'cx5':
                return new SUV(3, 'V3', 'black')
            case 'santa fe':
                return new SUV(1, 'V1', 'white')
        }
    }
}

const carFactory = new CarFactory();
const suvFactory = new SUVFactory();

const autoManufacturer = (type, model) => {
    switch(type) {
        case 'car':
            return carFactory.createCar(model)
        case 'SUV':
            return suvFactory.createCar(model)
    }
}

const myCx5 = autoManufacturer('SUV', 'cx5');
const mySantaFe = autoManufacturer('SUV', 'santa fe');
const myHonda = autoManufacturer('car', 'honda');
const myCivic = autoManufacturer('car', 'civic');

console.log(myCx5)
console.log(mySantaFe)
console.log(myHonda)
console.log(myCivic)