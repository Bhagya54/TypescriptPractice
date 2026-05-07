/*
class - blueprint of object
object - instance of a class

pen - 
properties - ink color, color, type - variable
behaviour - write,draw,scribble - functions/methods
motex - specific object - 
human 
properties - height,weight,age,name
behaviour-walk,talk,eat,sleep

Global variable 
    > instance - different for different object
    > static - same for all the object - company name - className.variablename
Local Variable
    > within a method      
*/

export class Emp_Details{
    empname:string;//hari //instance variable - global variable
    empid:number;//123
    static companyName="Infosys"

    constructor(empname:string,empid:number){
        this.empname=empname
        this.empid=empid
   }

   greet():string{//instance method
    let a:number=12;
    return `Hello, I am ${this.empname} and my empid is ${this.empid} and a value is ${a} `
   }

   welcome():string{
    return "welcome to ts programming: ${a}"
   }



  
}
// instance variable - these variables can be accessed only through the object reference
// object creation - instanstiation











