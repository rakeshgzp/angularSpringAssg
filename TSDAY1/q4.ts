var a:number = 50;                     //Global Variable
class Greeter {
    static a:string = "It's static"     //static variable   
    greeting: string = "Hello";         //Class Variable
    b: string;
    constructor(message: string) {
      this.b = message;
    }
    greet() {
      return "Hello, " + this.greeting;
    }
  }
function f4(): number {
    var a: number = 100;                   //Function Variable
    return a;
}
  let g = new Greeter("World");
  console.log("Global variable value "+ a )
  console.log("Class variable value "+g.greeting);
  console.log("Static variable value "+Greeter.a);
  console.log("Function variable value "+f4());
  