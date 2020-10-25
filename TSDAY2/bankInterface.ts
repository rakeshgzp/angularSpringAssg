interface IBank {
    assign_data(account_no: number, name: string, balance: number): void;
    display(): void;

}

class Bank implements IBank {

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
