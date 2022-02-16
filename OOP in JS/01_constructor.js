/* 
=> A constructor name first letter should be uppercase
=> Arrow functions cannot be used as constructors. 
They cannot be called with the new keyword. 
Doing that throws an error indicating that the function is not a constructor. 
As a result, bindings such as new.
*/

'use strict'; 
// you would not able to call constructor without a new word. It through dam error.

const Car = function(color){
    this.color = color;
    // this means global object or window
}

// here redCar is a object
let redCar =  new Car("red");

console.log(redCar);

// in js all constructors are public property so we can access using
console.log(redCar.color);

// but we can make private constructors using closure