/* Interface in TypeScript */

interface userType {
    name: String,
    age: Number,
    getName: ()=> string
};

let user:userType = {
    name: "sumit kumar das",
    age: 21,
    getName:function(){
        return this.name;
    }
};

console.log(user);
console.log(user.getName());
