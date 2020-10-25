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
