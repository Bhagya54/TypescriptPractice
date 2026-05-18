// tubpe is storing the data with different data type. Array will store only one data type

let tuple: [number, String, boolean?];
tuple=[23,"raghu"];

let onebigTuple:[number, string, ...number[]];
let twobigTuple:[number, String, ...string[]];

onebigTuple=[1, "one", 2,3,4,5,6,]
twobigTuple=[3,'two',"raghu", "baar", "vinni"];

console.log("adding tupples");
let addtupple = [...onebigTuple, ...twobigTuple];
console.log(addtupple)

for (const no of addtupple){
    console.log(no);
}
for (const m of onebigTuple){
    console.log(m);
}
for(const n of twobigTuple){

}