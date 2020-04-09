class Polygon {
    constructor(array) {
        this.array = array
    }

    get countSides() {
        return this.array.length
    }

    get perimeter() {
        let perimeter = this.array.reduce(function(total, side) {
            return total + side 
        }, 0)
    //    let perimeter = 0 
    //    for (let i =0; i < this.countSides; i++) {
    //     perimeter = perimeter + this.array[i]
    //    }
       return perimeter
    }
}

class Triangle extends Polygon {
    get isValid() {
        let side1 = this.array[0]
        let side2 = this.array[1]
        let side3 = this.array[2]
        return ((side1 + side2 > side3) && (side1 + side3 > side2) && (side2 + side3 > side1))
    }
}

class Square extends Polygon {
  get isValid() {
    let side1 = this.array[0]
    let side2 = this.array[1]
    let side3 = this.array[2]
    let side4 = this.array[3]
    return ((side1 === side2) && (side3 === side4))
  }

  get area() {
    return this.array[0] ** 2
  }
}

