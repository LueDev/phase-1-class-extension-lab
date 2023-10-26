// Your code here

class Polygon{ 
    constructor(array){
         this.sides = array
    }

    get countSides(){
        return this.sides.length
    }

    get perimeter(){
        console.log(this.sides)
        return this.sides.reduce((acc, value) => {return acc + value}, 0)
    }
}

class Triangle extends Polygon{

    get isValid(){
        if(this.countSides === 3){
            for(let i = 0; i < this.countSides; i++){
                let condition = (this.sides[i % this.countSides] + this.sides[(i + 1) % this.countSides]) > this.sides[(i + 2) % this.countSides]
                console.log(`firstSIDE + secondSIDE > thirdSIDE: ${this.sides[i % this.countSides]} + ${this.sides[(i + 1) % this.countSides]} > ${this.sides[(i + 2) % this.countSides]}`)
                console.log(condition)
                if(!condition){return false}
            }
        }
        return true
    }
}

class Square extends Polygon{ 
    get isValid(){
        if(this.countSides === 4){
            if(this.sides[0] !== (this.sides[1] && this.sides[2] && this.sides[3])){
                return false
            }
        }
    
        return true
    }

    get area(){
        if(this.countSides === 4){
            return this.sides[0] ** 2
        }
    }

}



// const poly = new Polygon([1, 2, 3, 4])
// console.log(poly.perimeter)

// const tri = new Triangle([15, 11, 1])
// console.log("TRIANGLE IS VALID SET TO : ", tri.isValid)

// const square = new Square([1, 1, 1, 2])
// const square2 = new Square([1, 1, 1, 1])
// const square3 = new Square([2, 2, 2, 2])
// console.log(square.isValid)
// console.log(square2.isValid)
// console.log(square3.area)