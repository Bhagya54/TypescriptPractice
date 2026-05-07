let array:number[]=[23,45,67,12,25];
console.log(array[2]);

for(let i=0;i<array.length;i++){
    console.log(array[i]);
}
//reverse array
let revarray = new Array(array.length);
for(let j=array.length-1; j>0;j--){
    revarray[j]=array[array.length-1-j];
    console.log(revarray[j]);
}
for(const no of revarray){
console.log(no);
}