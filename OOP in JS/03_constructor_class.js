/* ..................................
    Types of Methood
    => Three types of methood are available here.
    1) Constructor:  Constructor is automatically called when object(instance of class) create
    2) Prototype: Simple Function
    3) Static: When we declare a member of a class as static it means no matter how many objects 
    of the class are created, there is only one copy of the static member.
    A static member is shared by all objects of the class.
...................................... */

class student{
    constructor(name){
        this.name = name;
        console.log("Constructor Call !");
    }
    prototype(){
        console.log("User name is ",this.name);
    }
    static staticMethod(){
        console.log("Static Method Call");
    }
}

const stu1 = new student("Sumit Kumar Das");
stu1.prototype();
student.staticMethod();