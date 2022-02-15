/* ..................................
    Spread Operator(es6)
    => mostly used in the variable array where more than one values are expected.
...................................... */

/*
    Why we use spread operator
    Ex:
*/

function fun(name,...numbers){
    let sum = 0;
    for(let i in numbers){
        sum+=numbers[i];
    }
    console.log(`User name is ${name}`);
    console.log(`Sum is ${sum}`);
}
fun("sumit",12,8,18,20,55);


/*
    But the problem was, if we pass a array in the parameater
    Ex: fun("sumit",[12,8,18,20,55]);

    for over come like this situation, for over come this situation we use spread operator
*/
console.log("******Ex1: Spread Operator******");

function spreadOperator(name,...numbers){ // "...numbers" is a rest operator
    let sum = 0;
    for(let i in numbers){
        sum+=numbers[i];
    }
    console.log(`User name is ${name}`);
    console.log(`Sum is ${sum}`);
}
const array = [12,8,18,20,55];
spreadOperator("sumit",...array); // "...array" is a spread operator


console.log("******Ex2: Spread Operator******");


const array1 = [10,29,20,20];
console.log(array1); // [ 10, 29, 20, 20 ]
// using spread operaator convert array to single values
console.log(...array1); // 10 29 20 20
// using spread operaator convert single values to array
console.log([...array1]); // [ 10, 29, 20, 20 ]



console.log("******Ex3: Spread Operator******");


let arr2 = [10,20,30,40];
let arr3 = arr2;
arr2.push(50);
console.log(arr2); // [ 10, 20, 30, 40, 50 ]
console.log(arr3);  // [ 10, 20, 30, 40, 50 ]


console.log("******Ex4: Spread Operator******");


let arr4 = [10,20,30,40];
let arr5 = [...arr4];
arr4.push(50);
console.log(arr4); // [ 10, 20, 30, 40, 50 ]
console.log(arr5); // [ 10, 20, 30, 40 ]


console.log("******Ex5: Spread Operator******");


let arr6 = [10,20,30,40];
let arr7 = [50,60,70];
// concat two arrays using old methood
const finalArr = arr6.concat(arr7);
console.log(finalArr); // [10, 20, 30, 40, 50, 60, 70]
// concat using spread operator
const finalArr2 = [...arr6, ...arr7];
console.log(finalArr2); // [10, 20, 30, 40, 50, 60, 70]


console.log("******Ex6: Spread Operator using Object******");


const obj11 = {
    name: "sumit kr das"
};
const obj2 = {
    roll: 55
};
// concat obj1 & obj2 
const obj3 = {...obj11, ...obj2};
console.log(obj3); // { name: 'sumit kr das', roll: 55 }