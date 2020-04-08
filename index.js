// Your code here
class Polygon {
  constructor(sides = []) {
    this.sides = sides
  }

  get countSides() {
    return this.sides.length
  }

  get perimeter() {
    let p = this.sides.reduce((total, current) => total + current)
    return p
  }
}

class Triangle extends Polygon {

  get isValid() {
    if (this.sides.length === 3) {
      if (this.sides[0] < (this.sides[1] + this.sides[2])) {
        if (this.sides[1] < (this.sides[0] + this.sides[2])) {
          if (this.sides[2] < (this.sides[0] + this.sides[1])) {
            return true
          }
        }
      }
    }
    return false
  }

}

class Square extends Polygon {

  get isValid() {
    if (this.sides.length = 4) {
      if (this.sides[0] === this.sides[1]) {
        if (this.sides[1] === this.sides[2]) {
          if (this.sides[2] === this.sides[3]) {
            return true
          }
        }
      }
    }
    return false
  }

  get area() {
    if (this.isValid) {
      return this.sides[0] * this.sides[1]
    }
  }
}