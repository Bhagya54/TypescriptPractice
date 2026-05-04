//If -else
//If-else if-else
//switch-case    

let randomeNum:number=Math.floor(Math.random()*5)
if(randomeNum===0){
    console.log(`${randomeNum} is zero`)
}
else if(randomeNum===1){
    console.log(`${randomeNum} is one`)
}
else if(randomeNum===2){
    console.log(`${randomeNum} is two`)
}
else{
    console.log(`${randomeNum} is three or four`)
}

switch(randomeNum){
    case 0: 
    console.log(`${randomeNum} is zero`) 
    break;
    case 1:
    console.log(`${randomeNum} is one`) 
    break; 
    case 2: 
    console.log(`${randomeNum} is two`) 
    break;
    default:
    console.log(`${randomeNum} is three or four`) 
    break; 
}
