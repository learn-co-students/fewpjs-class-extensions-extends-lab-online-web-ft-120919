// Your code here

class Polygon {
  constructor(sidesArray) {
    this.sidesArray = sidesArray

  }

  get countSides() {
    return this.sidesArray.length
  }

  get perimeter() {
    let total = this.sidesArray.reduce(function (a, b) {
      return a + b
    }, 0)
    return total
  }

}

class Triangle extends Polygon {
  get isValid() {
    if (this.countSides === 3) {
      let sorted = this.sidesArray.sort(function (a, b) { return a - b })
      if (sorted[0] + sorted[1] <= sorted[2]) {
        return false
      } else {
        return true
      }
    } else {
      return false
    }
  }
}

class Square extends Polygon {
  get isValid() {
    if (this.countSides === 4) {
      if (this.sidesArray.every((val, i, arr) => val === arr[0])) {
        return true
      } else {
        return false
      }
    } else {
      return false
    }
  }

  get area() {
    return (this.perimeter / 4) ** 2
  }
}