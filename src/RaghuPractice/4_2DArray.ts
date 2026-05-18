//2d arrays will have 2 dimentions rows and columns data [][]

let twodAray:number[][] = [
    [23,3,4],
    [3,4,3]
]

for(let row=0; row<twodAray.length;row++){
    let str="";
    for(let col=0; col<twodAray[row].length;col++){
        str+=twodAray[row][col]+" ";
    }
    console.log(str);
}