let TwoD_Arr1:number[][]=[
    [34,23,56],
    [12,56,89]
]

// console.log(TwoD_Arr1[0][0])
// console.log(TwoD_Arr1[0][1])
// console.log(TwoD_Arr1[0][2])
// console.log(TwoD_Arr1[1][0])//89
// console.log(TwoD_Arr1[1][1])
// console.log(TwoD_Arr1[1][2])

//34 23 56
//12 56 89

for(let row=0;row<TwoD_Arr1.length;row++){//1<2
    let str="";
    for(let col=0;col<TwoD_Arr1[row].length;col++){//2<3
       str += TwoD_Arr1[row][col]+" ";//12 56 89 
    }
    console.log(str)
}