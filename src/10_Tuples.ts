/* store values of different data type, fixed length

*/

let employee:[number,string,boolean?]=[12,"star"];
for(let i=0;i<employee.length;i++){
    console.log(employee[i])
}

//Tuple with spread
console.log("Tuple with spread")
let rgb:[number,number,number,...string[],number]=[255,0,0,"Red","Blue","green",67]
rgb.forEach((val)=>{
    console.log(val)
})

//merge tuples
console.log("Merge the tuples")
let mergedTuple=[...employee,...rgb]
for(const m of mergedTuple){
    console.log(m)
}
