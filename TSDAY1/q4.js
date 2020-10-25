var a = 50; //Global Variable
var Greeter = /** @class */ (function () {
    function Greeter(message) {
        this.greeting = "Hello"; //Class Variable
        this.b = message;
    }
    Greeter.prototype.greet = function () {
        return "Hello, " + this.greeting;
    };
    Greeter.a = "It's static"; //static variable   
    return Greeter;
}());
function f1() {
    var a = 100; //Function Variable
    return a;
}
var g = new Greeter("World");
console.log("Global variable value " + a);
console.log("Class variable value " + g.greeting);
console.log("Static variable value " + Greeter.a);
console.log("Function variable value " + f1());
