/*
    default typed object
    update property
    add a new property
    define a custom type for object
    use any keyword in object
*/

let user = {
    name: "Justin Bieber",
    age: 22,
    address: "USA"
};

/*
    user.name = 200;

    Type 'number' is not assignable to type 'string'.   
*/

user.name = "Sumit";

/*
    we cannot add new value !
    user.email = "sumitkumar@gmail.com";

    Property 'email' does not exist on type 
    '{ name: string; age: number; address: string; }'.
    22 user.email = "sumitkumar@gmail.com"
*/


/********** define a custom type for object ***********/

interface userTyped {
    name: String,
    age: Number,
    address: String,
    username: any // it accept any value
}

let userDetails: userTyped = {
    name: "Justin Bieber",
    age: 22,
    address: "USA",
    username: 442
};

console.log("Custom Object in TS", userDetails);


/********** any means it accept any value ***********/

let acceptAny: any = {
    name: "Justin Bieber",
    age: 22,
    address: "USA",
    username: 442
};

acceptAny.name = 662;