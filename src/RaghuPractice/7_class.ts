
class Calcul {
    additi(a:number, b:number){
        return a+b;
    }
}

let ca =new Calcul;
//console.log(ca.additi(12, 24));
console.log(`adding two numbers`  + ca.additi(20, 40));

//constructor 
class Myclass1{
    name :string;
    constructor(name:string){
        this.name=name;
    }
    greet(){
        console.log(`welcome my dear ${this.name}`);
    }
        invite(){
        console.log(`come inside`)
    }
}

let ca2=new Myclass1("raghu");
ca2.greet();
ca2.invite();
