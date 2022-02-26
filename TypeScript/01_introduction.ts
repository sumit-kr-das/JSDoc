/*
    => The key diffrence is JavaScript uses 
    "dynamic types"(resolved it runtime)
    TypeScript uses "static types"(set during development).
    => Ts protect us dering development not the runtime.
*/

class App {
    test(){
        console.log("My first type script code");
    }
}

let a1 = new App();
a1.test();