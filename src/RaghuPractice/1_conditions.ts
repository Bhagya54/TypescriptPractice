/* 1. Grade calculator (if–else if)
Write a function that takes a number grade (0–100) and returns a letter grade:
90–100 → "A"
80–89 → "B"
70–79 → "C"
60–69 → "D"
Below 60 → "F" */

function grade(marks:number):string{
    if(marks<1 || marks>100){
        return "invalid Marks";
    }
    else if (marks>=90){
        return "A";
    }
    else if(marks>=80){
        return "B"
    }
    else if(marks>=70){
        return "C"
    }
    else if(marks>=60){
        return "D"
    }
    else {
        return "F"
    }
}
console.log(grade(20));
console.log(grade(1000));
console.log(grade(80));
console.log(grade(68));

enum Payment {
    pending,
    paid,
    failed
}
function paymentStatus(payment:Payment):String {
    switch(payment){
        case Payment.pending:
            return "payment pending"
            break;
        case Payment.failed:
            return "payment failed"
            break;
        case Payment.paid:
            return "payment paid"
        default:
            return "payment"
    }
}
console.log (paymentStatus(Payment.failed))
console.log(paymentStatus(Payment.pending))
console.log(paymentStatus(Payment.paid))