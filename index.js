class Polygon {
  constructor(sides) {
    this.sides = sides
  }

  get countSides() {
    return this.sides.length
  }

  get perimeter() {
    return this.sides.reduce((a, c) => a + c, 0)
  }
}

class Triangle extends Polygon {
  get isValid() {
    const [a, b, c] = this.sides.sort((d, e) => d - e)
    return this.countSides == 3 && a + b >= c
  }
}

class Square extends Polygon {
  get isValid() {
    return this.countSides == 4 && this.sides.every((c, i, a) => c == a[0])
  }

  get area() {
    return this.sides[0]**2
  }
}