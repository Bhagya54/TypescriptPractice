/*
while - repeated till the condition is satisfed. will not know no. of iteration
for - know no. of iteration
do while
nested loop
for each
of
*/
console.log("while loop")
let count =11;
while(count<=10){
    console.log(count)//3
    count++;
}
console.log("for loop")
for(let count=1;count<=10;count++){
    console.log(count);
}

console.log("do while loop")
do{
console.log(count)
}while(count<=10)

console.log("nested loop")
let numA=0;
while(numA<3){//1
    for(let numB=0;numB<4;numB++){//2
        let numC=0;
        do{
            console.log(`${numA} - ${numB} - ${numC}`)
            numC++;
        }while(numC<5)
    }
    numA++;
}

let fruits:string[]=["banana","apple","grapes"];
fruits.forEach((fruit)=>{
    console.log(`I like : ${fruit}`)
})

for(const f of fruits){
    console.log(`I like eating: ${f}`)
}



