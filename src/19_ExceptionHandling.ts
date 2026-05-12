//Exception

/*
try : block of code - risky nature - more probability of getting an execption
catch: block of code - handling the exception
throw: intentinally throw an exception
finally: block of code - execute everytime irrespective of exception being occured or not
*/


class ExceptionalDemo {
    static validateNumber(num: number): void {
        if (num < 0) {
            throw new Error("Number should be positive")
        }
    }

    static main() {
        try {
            this.validateNumber(10)
        }
        catch (e: any) {
            console.log("valiadation error: " + e.message)
        }

        try{
            let a1:number=10;
            let a2:number=0;
            let result=a1/a2;
            if(!isFinite(result)){
                throw new Error("Divide by zero not possible")
            }
        }

        catch(e:any){
            console.log("error:" +e.message)
        }

        finally {
            console.log("Everytime I will execute")
        }
    }
}
ExceptionalDemo.main()

