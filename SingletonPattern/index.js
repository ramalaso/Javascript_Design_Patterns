let instance = null;

class Car {
    constructor(doors, engine, color) {
        if(!instance) {
            this.doors = doors
            this.engine = engine
            this.color = color
            instance = this
        } else {
            return instance
        }
    }
}



const civic = new Car(4, 'v6', 'red')
const Honda = new Car(2, 'V8', 'red')

console.log(civic)
console.log(Honda) //This instance is the same as before