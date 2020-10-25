"use strict";
exports.__esModule = true;
var Bank = /** @class */ (function () {
    function Bank() {
    }
    Bank.prototype.assign_data = function (account_no, name, balance) {
        this.account_no = account_no;
        this.name = name;
        this.balance = balance;
    };
    Bank.prototype.display = function () { console.log("account_no : " + this.account_no + "     name: " + this.name + "    Balance : " + this.balance); };
    return Bank;
}());
var bankObj = new Bank();
bankObj.assign_data(1, "Rakesh", 50000);
bankObj.display();
var Student = /** @class */ (function () {
    function Student() {
    }
    Student.prototype.assign_data = function (id, name, stream) {
        this.id = id;
        this.name = name;
        this.stream = stream;
    };
    Student.prototype.display = function () { console.log("id : " + this.id + "     name: " + this.name + "    stream : " + this.stream); };
    return Student;
}());
var studObj = new Student();
studObj.assign_data(1, "Rakesh", "CSE");
studObj.display();
