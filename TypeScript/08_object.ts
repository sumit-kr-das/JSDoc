class App{
    name:string = "sumit kumar das"
    constructor(name: string){
        this.name = name;
        console.log("constructor call !");
    }
    getName():void {
        console.log(this.name);
    }
};

let a1 = new App("sumit");
a1.getName(); 