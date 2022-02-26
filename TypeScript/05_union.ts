/*
    "union" means we can specify greater then one type of values
*/


/* we can assign string type values as well as number type values */

let data: string|number = "sumit";
data = 20;

console.log(data);


/********** Example 2 ***********/

function sumVal(num1: Number|String ,num2: Number|String){
    let result;
    if(typeof num1 === 'number' && typeof num2 === 'number'){
        result = num1+num2;
    }else{
        result = num1.toString()+num2.toString();
    }
    return result;
}

console.log(sumVal(20,20));
console.log(sumVal("sumit"," kumar"));

