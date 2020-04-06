class Polygon {
  constructor(sidesArr){
    this.sidesArr = sidesArr;
  }

  get countSides(){
    return this.sidesArr.length;
  }

  get perimeter(){
    let perim = this.sidesArr.reduce(function(total, elt) {
        return total + elt
    }, 0)
    return perim; 
  }
}//Polygon

class Triangle extends Polygon {

  get isValid(){
    let side1 = this.sidesArr[0];
    let side2 = this.sidesArr[1];
    let side3 = this.sidesArr[2];

    return ((side1+side2 > side3) && (side1+side3 > side2) && (side2+side3 > side1))
  }//isValid 
}//Triangle

class Square extends Polygon {
  get area(){
    return this.sidesArr[0]**2;
  }

  get isValid(){
    let side1 = this.sidesArr[0];
    let side2 = this.sidesArr[1];
    let side3 = this.sidesArr[2];
    let side4 = this.sidesArr[3];
    return ((side1 === side2) && (side1 === side3) && (side1 === side4) && (side2 === side3) && (side2 === side4) && (side3 === side4));
  }//isValid
}//Square