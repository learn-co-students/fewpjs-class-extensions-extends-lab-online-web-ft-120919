// Your code here

class Polygon{
    constructor(arraySides) {
        
        this.arraySides = arraySides;
      }
      get countSides() {
		return this.arraySides.length;
    }
    get perimeter() {
		return this.arraySides.reduce((sidesX, sidesZ) => sidesX  + sidesZ, 0);
	}

}

class Triangle extends Polygon {
    get isValid() {
        let sidesX = this.arraySides[0];
        let sidesY = this.arraySides[1];
        let sidesZ = this.arraySides[2];
        return !(sidesX +sidesY <= sidesZ || sidesX + sidesZ <= sidesY || sidesY +sidesZ <= sidesX)  
    }
}

class Square extends Polygon {
    get isValid() {
        let sidesX = this.arraySides[0];
        let sidesY = this.arraySides[1];
        let sidesZ = this.arraySides[2];
        let sidesW = this.arraySides[3];
        return ((sidesX === sidesY) && (sidesX === sidesZ) && (sidesX === sidesW) && (sidesY === sidesZ) && (sidesY === sidesW) && (sidesZ === sidesW));
    }
    get area(){
        return this.arraySides[0]**2;
    }
}
