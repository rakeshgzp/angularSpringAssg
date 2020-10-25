class Student{
    private id: number;
    private name:string;
    private stream: string;
    constructor(id,name,stream){
        this.id = id;
        this.name = name;
        this.stream = stream;
    }
    public display(){
        console.log("Id is :"+this.id+" Name is: "+this.name+" Stream is "+this.stream);
    }
}
var std = new Student(1002,"Rakesh","CSE");
std.display();
