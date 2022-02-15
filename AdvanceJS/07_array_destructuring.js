/* ..................................
    Array Destructuring(es6)
...................................... */

/*
    Order version
*/

const user = ["sumit","snehasis"];
console.log("user1 ",user[0]);
console.log("user2 ",user[1]);


/*
    1. using Destructuring
*/

const students = ["sumit","snehasis"];
const [student1,student2] = students;
console.log(`Student1 is ${student1} & Studnt2 is ${student2}`);


/*
   2. set default value in Destructure
*/

const emp = ["justin",1000,"delhi"];
const [empName,empSalary = 3000,location] = emp;
console.log(`Employee name is ${empName} & Employee salary is ${empSalary} & Location is ${location}`);


/*
    3. nested Destructuring
*/


const obj = ["sumit",22,"delhi",["male",2500]];
let [name,id,address,[gender,salary]] = obj;
console.log(`Name: ${name}, id: ${id}, address: ${address}, gender: ${gender}, salary: ${salary}`);


/*
    4. Destructuring & Rest Operator
*/


const user2 = ["snehasis",08,"delhi"];
const [usrName, ...args] = user2;
console.log(`User name ${usrName} & other details ${args}`);


/*
    5. Destructuring array using function argument
*/


function userDetails([name,age,city]){
    console.log(`User name is ${name} , salary is ${age} & Location is ${city}`);
}
userDetails(["Rounak",41,"USA"])


/*
    5. Destructuring array using function
*/

function erp(){
    return ["Snehasis",08,"Mumbai"];
}

let [erp_name,erp_age,erp_address] = erp();
console.log(`User name is ${erp_name} , age is ${erp_age} & Location is ${erp_address}`);