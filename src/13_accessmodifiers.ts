//private / public / protected

class emp{
    private empid=12; // access only within the class
    public empname="tina"//access anywhere outside the class as well
    protected salary=10000//access within the class as well as subclass

    getID(){
        return this.empid
    }

}


const em1=new emp();
console.log(em1.empname)
//console.log(em1.salary)
