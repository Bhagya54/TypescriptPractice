/* 
if age is 18 or older eligible to vote, if age is < 18 not eligible to vote and if age is >80 eligible to vote */


let age1:number;
age1 =81;

if (age1>18 && age1<80){
    console.log(`Person can vote as age is ${age1}`)
}else if (age1>80){
    console.log(`Person can vote twice as age is ${age1}`)
}else {
      console.log(`Person can not vote as age is ${age1}`)
}
//switch statment
let trafficLight:string = 'grepurpen'
switch (trafficLight){
    case "green":
        console.log(`Proceed`)
        break;
    case "Red":
        console.log(`Stop`)
        break;
    case "yello":
        console.log(`wait`)
    default:
        console.log(`invalid color`)
}