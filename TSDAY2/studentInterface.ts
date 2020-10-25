interface IStudent {
    assign_data(id: number, name: string, stream: string): void;
    display(): void;

}

class Student implements IStudent {

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
