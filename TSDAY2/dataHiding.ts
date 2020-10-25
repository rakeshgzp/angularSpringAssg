class Bank{
    private accNo: number;
    private name:string;
    private balance: number;
    constructor(accNo,name,balance){
        this.accNo = accNo;
        this.name = name;
        this.balance = balance;
    }
    display(){
        console.log("Account no: "+this.accNo+" Name is: "+this.name+" Balance "+this.balance)
    }
}
var bObj = new Bank(1002,"Rakesh",50000);
bObj.display();
// console.log(bObj.accNo);        Private variable is not allowed outside class
