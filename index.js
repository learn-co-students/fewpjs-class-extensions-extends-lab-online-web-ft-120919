// Your code here
class Polygon {
    constructor(sidesArray) {
        this.sidesArray = sidesArray
    }

    get countSides() {
        return this.sidesArray.length
    }

    get perimeter() {
        return this.sidesArray.reduce(function(total, currentValue) {
            return total + currentValue
        }, 0)
    }
}

class Triangle extends Polygon {
    get isValid() {
        const a = this.sidesArray[0]
        const b = this.sidesArray[1]
        const c = this.sidesArray[2]
        
        if (a + b <= c || a + c <= b || b + c <= a) {
            return false
        } else {
            return true
        }
    }
}

class Square extends Polygon {
    get area() {
        if (this.isValid) {
            return this.sidesArray[0] ** 2
        } else {
            return false
        } 
    }

    get isValid() {
        const a = this.sidesArray[0]

        return this.sidesArray.every(currentValue => currentValue === a)
    }
}