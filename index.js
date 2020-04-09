// Your code here
class Polygon {
  constructor(sides) {
    this.sides = sides
  }

  get countSides() {
    return this.sides.length
  }

  get perimeter() {
    return this.sides.reduce((s, e) => s + e)
  }
}

class Triangle extends Polygon {
  get isValid() {

  if (this.countSides !== 3) { return false }
  let s1 = this.sides[0]
  let s2 = this.sides[1]
  let s3 = this.sides[2]

  if (s1 > s2+s3 || s2 > s1+s3 || s3 > s1+s2) {
    return false
  } else {
    return true
  }
  }
}

class Square extends Polygon {
  get isValid() {
    if (this.sides[0] === this.sides[1] && this.sides[0] === this.sides[2]) {
      return true
    } else {
      return false
    }
  }

  get area() {
    return this.sides[0] * this.sides[1]
  }
}
