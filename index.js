// Your code here

class Polygon {
    
    constructor(array){
        let counter = 1
        array.forEach(element => {
            let identifier = `side${counter}`
            this[identifier] = element
            counter = counter + 1
        });
        // this.side1 = array[0]
        // this.side2 = array[1]
        // this.side3 = array[2]
    }

    get countSides() {
        return Object.keys(this).length
    }

    get perimeter() {
        let perimeter = 0
        Object.keys(this).forEach(key => {
            perimeter = perimeter + this[key]
        })
        return perimeter 
    }

}

class Triangle extends Polygon {

    get isValid() {
        if (this.side1 + this.side2 > this.side3) {
            if (this.side1 + this.side3 > this.side2){
                if (this.side2 + this.side3 > this.side1) {
                    return true 
                }
                else {
                    return false 
                }
            }
            else {
                return false 
            }
        }
        else {
            return false 
        }
     
    }

}

class Square extends Polygon {
    
    get isValid() {
        if (this.side1 + this.side2 === this.side3 + this.side4) {
            return true
        }
        else {
            return false 
        }
    }

    get area() {
        return this.side1 ** 2
    }


}


