/********** utils.ts**********/

namespace usersUtility {
    export class Parent {
        name;
        setName(name) {
            return this.name = name;
        };
    };
    export interface userType {
        getName();
    };
};



/********** 10_namespace.ts**********/

/// <reference path="./utils.ts" />

namespace usersUtility {
    export class Users extends Parent implements userType{
        getName(){
            return this.name;
        };
    };
};

let uu1 = new usersUtility.Users();
uu1.setName("Robart");
console.log(uu1.getName());

// $ tsc 10_namespace.ts --outfile outputProduce.js
// $ node outputProduce.js