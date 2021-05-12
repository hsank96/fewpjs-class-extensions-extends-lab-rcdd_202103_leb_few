// Your code here
class Polygon{
  constructor(arr){
    this.arr = arr;
  }
  get countSides(){
    return this.arr.length;
  }
  get perimeter(){
    let p=0;
    for (let i=0; i<this.arr.length; i++){
      p+= this.arr[i]
    }
    return p;
  }
}

class Triangle extends Polygon{}