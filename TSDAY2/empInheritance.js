var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Employee = /** @class */ (function () {
    function Employee() {
    }
    Employee.prototype.display = function () {
        console.log("ID is: " + this.id + "\nName is: " + this.name + "\nDept is: " + this.dept + "\nDesignation : " + this.designation);
    };
    return Employee;
}());
var regular_employee = /** @class */ (function (_super) {
    __extends(regular_employee, _super);
    function regular_employee(id, name, dept, designation, salary) {
        var _this = _super.call(this) || this;
        _this.id = id;
        _this.name = name;
        _this.dept = dept;
        _this.designation = designation;
        _this.salary = salary;
        return _this;
    }
    regular_employee.prototype.display = function () {
        _super.prototype.display.call(this);
        console.log("Salary per month is: " + this.salary);
    };
    return regular_employee;
}(Employee));
var contract_employee = /** @class */ (function (_super) {
    __extends(contract_employee, _super);
    function contract_employee(id, name, dept, designation, hrSalary) {
        var _this = _super.call(this) || this;
        _this.id = id;
        _this.name = name;
        _this.dept = dept;
        _this.designation = designation;
        _this.salary = 8 * 30 * hrSalary;
        return _this;
    }
    contract_employee.prototype.display = function () {
        console.log("ID is: " + this.id + "\nName is: " + this.name + "\nDept is: " + this.dept + "\nDesignation : " + this.designation);
        console.log("Salary per month when 8hr/day work done then salary is: " + this.salary);
    };
    return contract_employee;
}(Employee));
var remp = new regular_employee(1, "Delton", "HR", "Associate", 50000);
remp.display();
var cemp = new contract_employee(1, "Robin", "IT", "Associate", 250);
cemp.display();
