//Module - different file
//export module - import module

import { Emp_Details } from "./12_ClassDemo";

const e1 = new Emp_Details("hari", 123);//1 object
console.log(e1.empname)
console.log(e1.empid)
console.log(e1.greet())
console.log(e1.welcome())
console.log(Emp_Details.companyName)
const e2 = new Emp_Details("sarita", 345)//2nd object
console.log(e2.empname)
console.log(e2.empid)
console.log(e2.greet())