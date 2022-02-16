class employee {
    constructor(name, age, salary) {
        this.name = name;
        this.age = age;
        this.salary = salary;
        console.log("Constructor Call !");
    }
    info() {
        console.log(
            `Employee Name: ${this.name}, Age: ${this.age}, Salary: ${this.salary}`
        );
    }
}

class manager extends employee {
    info() {
        let ta = 100;
        let pa = 300;
        let totalSalary = this.salary + ta + pa;
        console.log(
            `Manager Name: ${this.name}, Age: ${this.age}, Salary: ${totalSalary}`
        );
    }
}

// manager details
let manager1 = new manager("Sumit Kr Das", 23, 21000);
manager1.info();

//employee details
let emp1 = new employee("Snehasis Das", 20, 13432);
emp1.info();