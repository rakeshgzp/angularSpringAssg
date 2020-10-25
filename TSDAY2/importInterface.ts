import inf = require("./externalInterface");
class Bank implements inf.IBank {

    private account_no: number;
    private name: string;
    private balance: number;

    assign_data(account_no: number, name: string, balance: number): void {
        this.account_no = account_no;
        this.name = name;
        this.balance = balance;
    }

    display(): void { console.log("account_no : " + this.account_no + "     name: " + this.name + "    Balance : " + this.balance); }

}



var bankObj = new Bank();
bankObj.assign_data(1, "Rakesh", 50000);
bankObj.display();


class Student implements inf.IStudent {

    private id: number;
    private name: string;
    private stream: string;

    assign_data(id: number, name: string, stream: string): void {
        this.id = id;
        this.name = name;
        this.stream = stream;
    }

    display(): void { console.log("id : " + this.id + "     name: " + this.name + "    stream : " + this.stream); }

}

var studObj = new Student();
studObj.assign_data(1, "Rakesh", "CSE");
studObj.display();
