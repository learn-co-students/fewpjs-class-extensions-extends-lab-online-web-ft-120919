class Polygon {
    constructor(arr) {
        this.array = arr
    } 

    get countSides() {
        return this.array.length
    }

    get perimeter() {
        const reducer = (accumulator, currentValue) => accumulator + currentValue;
        return this.array.reduce(reducer)
    }
}

class Triangle extends Polygon {
    
    get isValid() {
        const sides = this.array
        if (sides[0] + sides [1] > sides[2] && sides[1] + sides[2] > sides [0] && sides[0] + sides[2] > sides[1]) {
            return true 
        } else {
            return false
        }

    }
}

class Square extends Polygon {
    
    
    get isValid() {
        const side = this.array[0]
        const sides = this.array
        return sides.every(s => s===side)
    }

    get area() {
        const side = this.array[0]
        return side ** 2
    }
}