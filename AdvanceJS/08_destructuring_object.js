/* ..................................
    Object Destructuring(es6)
...................................... */

const user = {
    name: "sumit kumar das",
    age: 21
};

const {name, age} = user;
// property name should be same as key 

const {name: userName, age: userAge} = user;