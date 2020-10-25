var employee = /** @class */ (function () {
    function employee() {
        this.id = 1;
        this.name = "Delton";
        this.dept = "HR";
        this.designation = "Associate";
    }
    // constructor(id,name,dept,designation){
    //     this.id=id;
    //     this.name=name;
    //     this.dept=dept;
    //     this.designation=designation;
    // }
    employee.prototype.display = function () {
        console.log("Id is " + this.id + "\nName is " + this.name + "\nDepartment is " + this.dept + "\nDesignation is " + this.designation);
    };
    return employee;
}());
// var emp = new employee(2,"A","IT","Associate");
var emp = new employee();
emp.display();
