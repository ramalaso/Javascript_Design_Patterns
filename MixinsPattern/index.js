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

let carMixin = {
    renEngine() {
        console.log(`The ${this.engine} engine is doing Vroom Vroom`)
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

Object.assign(Car.prototype, carMixin) //Adding carMixin method to wathever car is created

const myCx5 = autoManufacturer('SUV', 'cx5');
const mySantaFe = autoManufacturer('SUV', 'santa fe');
const myHonda = autoManufacturer('car', 'honda');
const myCivic = autoManufacturer('car', 'civic');

myHonda.renEngine()