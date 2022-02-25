/*********Program 1*********/
function fun(){
    console.log(name);
    console.log(age);

    var name = "sumit";
    let age = 21;
}
fun();


/*********Program 2*********/
for(var i=0; i<3; i++){
    setTimeout(()=>{
        console.log(i);
    },1)
}


/*********Program 3*********/
let temp = {
    a: 20,
    b: 20,
    sum(){
        return this.a + this.b;
    },
    multi: ()=> {
        return this.a * this.b;
    }
};
console.log(temp.sum());
console.log(temp.multi());


/*********Program 4*********/
console.log(+true);
console.log(!"abc");


/*********Program 5*********/
/* this statement is valid ? */
const bird = {
    size: "small"
};
const mouse = {
    name: "sumit",
    small: true
};


/*********Program 6*********/
let c = { greeting: "Hey" };
let d;
d = c;
c.greeting = "Hello";
console.log(d.greeting);


/*********Program 7*********/
let a = 3;
let b = new Number(3);
console.log( a == b );
console.log( a === b);

// check the reason
// console.log(typeof a);
// console.log(typeof b);


/*********Program 8*********/
let greeting;
greetign = { };
console.log(greetign);


/*********Program 9*********/
function sum(a,b){
    return (a+b);
}
console.log(sum(10,"2"));


/*********Program 10*********/
console.log(typeof[]);


/*********Program 11*********/
let x = 0;
console.log(x++);


/*********Program 12*********/
console.log(eval('10*10+5'));


/*********Program 13*********/
/* find the output when you click on the hello world ? */
<div onclick="console.log('div')">
    <p onclick="console.log('p')">
        Hello World
    </p>
</div>


/*********Program 14*********/
