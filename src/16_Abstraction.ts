interface RBI {

    withdraw(): void;
    deposit(): void;




}


class ICICI implements RBI {
    withdraw(): void {
        console.log("icici withdraw 1 lakh")
    }

    deposit(): void {
        console.log("icici withdraw 2 lakh")
    }

    creditCard(): void {
        console.log("ICICI credit Card")
    }

}

class HDFC implements RBI {
    withdraw(): void {
        console.log("hdfc withdraw 1.5 lakh")
    }

    deposit(): void {
        console.log("icici withdraw 3 lakh")
    }

    creditCard(): void {
        console.log("HDFC credit Card")
    }

    debitCard(): void {
        console.log("HDFC debit Card")
    }
}


//you can't create object of an interface
const icic = new ICICI();
icic.withdraw();

const hdfc = new HDFC();
hdfc.withdraw();



//const r=new RBI(); - can't create object of an interface

//method without implementation - abstract methods