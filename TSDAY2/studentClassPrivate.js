var Student = /** @class */ (function () {
    function Student(id, name, stream) {
        this.id = id;
        this.name = name;
        this.stream = stream;
    }
    Student.prototype.display = function () {
        console.log("Id is :" + this.id + " Name is: " + this.name + " Stream is " + this.stream);
    };
    return Student;
}());
var std = new Student(1002, "Rakesh", "CSE");
std.display();
