// Prototype Methood Process 1

let Car = function(color){
    this.color = color;
    this.getColor = function(){
        return this.color;
    }
}

const redCar = new Car("Red");
console.log(redCar);


// Prototype Methood Process 2

let Car2 = function(color){
    this.color = color;
    Car2.prototype.getColor = function(){
        return this.color;
    }
}

const greenCar = new Car2("Green");
console.log(greenCar);

console.log(greenCar.getColor());