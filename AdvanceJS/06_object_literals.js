/* ..................................
    Object Literals(es6)
...................................... */

/*
    1. If keys & values are same then write once
*/

const name = "sumit";
roll = 55;
const details = {
    name, // name: name
    roll // roll: roll
};


/*
    2. Use variable as a property name
*/

const n = "user";
const x = "student";

const obj = {
    [n]: "sumit",
    [x + " name"]: "sumit kumar das",
    roll: 55
};
console.log(obj); // { user: 'sumit', studentname: 'sumit kumar das', roll: 55 }


/*
    3. Update in function declaration in object
*/

// previously we did

const obj1 = {
    name: "sumit kr das",
    show: function(){
        console.log(this.name);
    }
}
obj1.show(); // sumit kr das

// now we do

const obj2 = {
    name: "sumit kr das",
    show(){
        console.log(this.name);
    }
}
obj2.show(); // sumit kr das


/*
    4. Function Returns a Object
*/

const sName = "iron man";
const job = "ceo of iron factory";

function returnObj(name,job){
    return {name,job};
}
const val = returnObj(sName,job);
console.log(val); // { name: 'iron man', job: 'ceo of iron factory' }