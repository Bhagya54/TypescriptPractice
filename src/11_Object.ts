/*
object - send the value in key and value pair
key - string
value - any data type
objects can also include methods, functions assosciated with object
*/

let empDetails:{name:string,empid:number,isDev:boolean}={
    name:"bhagya",
    empid:67,
    isDev:true
}

console.log(empDetails.empid)

let additionalEmpDetails:{age:number,gender:string}={
    age:67,
    gender:"female"
}

let mergedObject={...empDetails,...additionalEmpDetails}
console.log(mergedObject)

let multEmpDetails=[
    {
    name:"bhagya",
    empid:67,
    isDev:true
    },
    {
        name:"raj",
        empid:89,
        isDev:false
    }
]

console.log(multEmpDetails[1].name)//raj


let car={
    model:"BMW",
    speed:200,
    drive():string{
        return `You are driving the ${this.model} with speed of ${this.speed} km/hr`
    }
}

console.log(car.drive())

let bankAccount={
    balance:1000,
    withdraw(amt:number){
        this.balance -= amt;
    },
    deposit(amt:number){
        this.balance +=amt;
    }
}

bankAccount.deposit(500)//1500
bankAccount.withdraw(200)
console.log(bankAccount.balance)//1300


