/* ..................................
    function with multiple argument
...................................... */

function sum(num1,num2){
    console.log(`Sum is ${num1+num2}`);
}
sum(12,8);

/*
    But the problem was, we cannot use this function in multiple arguments usecase, like
    Ex: sum(12,8,18,20);

    for over come like this situation, for in loop comes into picture
    Ex:
*/

function sum2(){
    let sum = 0;
    for(let i in arguments){
        sum+=arguments[i];
    }
    console.log(`Sum is ${sum}`);
}
sum2(12,8,18,20);

/*
    again the problem was,
    Ex: sum("sumit",12,8,18,20,55);

    for over come like this situation, we use rest operator(es6)
    Ex:
*/

function restOperator(name,...numbers){
    let sum = 0;
    for(let i in numbers){
        sum+=numbers[i];
    }
    console.log(`User name is ${name}`);
    console.log(`Sum is ${sum}`);
}
restOperator("sumit",12,8,18,20,55);