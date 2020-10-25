class Employee {
    id: number;
    name: string;
    dept: string;
    designation: string;

    display(): void {
        console.log("ID is: " + this.id + "\nName is: " + this.name + "\nDept is: " + this.dept + "\nDesignation : " + this.designation);
    }
}
class regular_employee extends Employee {
    salary: number;

    constructor(id: number, name: string, dept: string, designation: string, salary: number) {
        super();
        this.id = id;
        this.name = name;
        this.dept = dept;
        this.designation = designation;
        this.salary = salary;
    }

    display(): void {
        super.display();
        console.log("Salary per month is: " + this.salary);
    }
}
class contract_employee extends Employee {
    salary: number;

    constructor(id: number, name: string, dept: string, designation: string, hrSalary: number) {
        super();
        this.id = id;
        this.name = name;
        this.dept = dept;
        this.designation = designation;
        this.salary = 8 * 30 * hrSalary;
    }

    display(): void {                             //Overriding display method of base class
        console.log("ID is: " + this.id + "\nName is: " + this.name + "\nDept is: " + this.dept + "\nDesignation : " + this.designation);
        console.log("Salary per month when 8hr/day work done then salary is: " + this.salary);
    }
}

var remp = new regular_employee(1, "Delton", "HR", "Associate", 50000);
remp.display();
var cemp = new contract_employee(1, "Robin", "IT", "Associate", 250);
cemp.display();