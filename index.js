// Your code here
class Polygon {
	constructor(collection) {
		this.sides = collection;
	}
	get countSides() {
		return this.sides.length;
	}
	get perimeter() {
		return this.sides.reduce((a, c) => a + c, 0);
	}
}
class Triangle extends Polygon {
	get isValid() {
		let sides = this.sides;
		let [a, b, c] = [sides[0], sides[1], sides[2]];
		return !(a + b <= c || a + c <= b || b + c <= a);
	}
}

class Square extends Polygon{
    get area(){
        return this.sides[0]*this.sides[0]
    }
    get isValid(){
        return this.sides.reduce((a,c)=> c === this.sides[0], false)
    }
}
