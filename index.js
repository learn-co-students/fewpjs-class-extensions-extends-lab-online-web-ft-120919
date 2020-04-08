// Your code here
class Polygon {
    constructor(sides) {
        this.sides = sides
        this.count = this.sides.length
    }


    get countSides() {
        return this.count
       // return this.sides.length
    }

    get perimeter() {
        let sum = 0;
        this.sides.forEach(number => {
            sum += number;
            
        });
        return sum;

    }
}

class Triangle extends Polygon {
    get isValid() {
        //A triangle is valid if sum of its two sides is greater than the third side
        if(this.count === 3) {
            let a = this.sides[0]
            let b = this.sides[1]
            let c = this.sides[2]
            return((a + b > c) && (b + c > a) && (a + c > b))
        }
    }
   
}

class Square extends Polygon{
    //A valid square has four equal sides with positive length and four equal angles (90-degree angles)
    get isValid() {
        if(this.count === 4) {
            let a = this.sides[0]
            let b = this.sides[1]
            let c = this.sides[2]
            let d = this.sides[3]
            return ((a === b) && (a === c) && (a === d))
        }

    }

    get area() {
        //Area	=	 s	2
        
        return this.sides[0] * this.sides[0]
    }

}