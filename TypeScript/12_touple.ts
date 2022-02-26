/*
    Touple Type
    => TypeScript introduced a new data type called Tuple. 
    Tuple can contain two or more values of different data types.
    As we know array consists value of Homogeneous types
    but sometimes we need to store a collection of a different type value 
    in a single variable. 
    Then we will go with Tuples. 
    They are just like structure in C programming 
    and can also be passed as parameters in a function call.
*/

const person: {
    name: String; // string type
    age: Number; // number type
    hobbies: String[]; // string type array
    role: [Number, String]; // touple type
} = {
    name: "Smith",
    age: 20,
    hobbies: ['Sports','Drawing'],
    role: [2, 'author'] // we can contain only exact two data
    // if we know how many values contains in an array advance then we should be use touple
};