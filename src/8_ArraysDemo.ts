//Array: is a collection of similar type of data items stored in contiguous memory locations. It is a data structure that can hold a fixed number of values of the same type. Each item in an array is called an element, and each element is identified by its index or position in the array.
/*
index as zero



*/

let array1:number[]=[23,45,67,12,25];
//console.log(array1[2])

for(let i=0;i<array1.length;i++){
    console.log(array1[i])
}
console.log("Reverse of an array")
let revArr=new Array(array1.length)
for(let z=array1.length-1;z>=0;z--){//z=3
    console.log(array1[z])//25
}
//revArr = [25,12,67,45,23]
console.log("storing values into new array: revArr")
for(let s=0;s<array1.length;s++){//s=1
    revArr[s]=array1[array1.length-1-s]
}

revArr.forEach((rev)=>{
    console.log(rev)
})

let array2=new Array(10)
for(let j=0;j<array2.length;j++){
    let randValue=Math.floor(Math.random()*10)//0->6/1->9
    console.log(randValue)
    array2[j]=randValue;
}

for(const c of array2){
    console.log(c)
}



