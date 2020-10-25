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
