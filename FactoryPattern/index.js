class Car {
    constructor(doors, engine, color) {
        this.doors = doors
        this.engine = engine
        this.color = color
    }
}

class carFactory {
    createCar(type) {
        switch(type) {
            case 'civic':
                return new Car(4, 'V6', 'red')
            case 'honda':
                return new Car(2, 'V8', 'grey')
        }
    }
}

const factory = new carFactory();
const myHonda = factory.createCar('honda')
const myCivic = factory.createCar('civic')

console.log(myHonda)
console.log(myCivic)