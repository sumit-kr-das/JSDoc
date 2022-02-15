/* ..................................
    var in JavaScript - global scope
...................................... */

var t = 100; // variable declaration
var t = 200; // this is a valid statement
t = "temp var"; // this is a valid statement

{
    var global_scope = "var is global scope";
}
console.log(global_scope);


/* .......................................
    let in JavaScript (es6) - block scope
........................................... */

let x = 100; // variable declaration
// let x = 200;  syntax_error: Identifier 'x' has already been declared
x = "Sumit"; // this is a valid statement

{
    let block_scope_let = "let is block scope";
}
// console.log(block_scope_let); 'block_scope_let' stored in a seperate memory space, so we cannot access outside of the block


/* .........................................
    const in JavaScript (es6) - block scope
............................................*/

const y = 400;
// const y = 300; syntax_error: Identifier 'y' has already been declared
// y = "snehasis"; type_error: assignment to constant variable
 
{
    let block_scope_const = "let is block scope";
}
// console.log(block_scope_const); 'block_scope_const' stored in a seperate memory space, so we cannot access outside of the block


// In the function scope let & const are behaviour same way