var Bank = /** @class */ (function () {
    function Bank(accNo, name, balance) {
        this.accNo = accNo;
        this.name = name;
        this.balance = balance;
    }
    Bank.prototype.display = function () {
        console.log("Account no: " + this.accNo + " Name is: " + this.name + " Balance " + this.balance);
    };
    return Bank;
}());
var bObj = new Bank(1002, "Rakesh", 50000);
bObj.display();
// console.log(bObj.accNo);        Private variable is not allowed outside class
