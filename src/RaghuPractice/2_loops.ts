// Use a for loop to print numbers 1 to 10.
// Sum of first N numbers// Write a function:

for(let i=1; i<=10; i++){
    console.log(i);
}

function sumOfNu(numb:number):number{
    let total:number = 0;
    for(let i=0;i<=numb;i++){
        total+=i;
    }
    return total;
}
console.log(sumOfNu(3));
