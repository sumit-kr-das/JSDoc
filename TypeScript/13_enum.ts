/*
    Enum Type
    => Enums are one of the few features TypeScript has which is not a type-level extension of JavaScript.
    Enums allow a developer to define a set of named constants. 
    Using enums can make it easier to document intent, 
    or create a set of distinct cases. 
    TypeScript provides both numeric and string-based enums.
*/

enum Role { ADMIN, READ_ONLY, AUTHOR };

const person = {
    name: "Smith",
    age: 20,
    hobbies: ['Sports', 'Drawing'],
    role: Role.ADMIN
};


if(person.role === Role.ADMIN){
    console.log("author here");
}
