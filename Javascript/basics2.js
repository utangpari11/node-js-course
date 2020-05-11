let i=1
while (i<=4) {
    console.log("Value of i: "+i)
    i++
}
//**************** Do while loop
i=1
do{
    console.log("i: "+i)
    i++
}while(i<=4)
console.log("*********** for loop demo ***********")
for(let j=1;j<8;j++){   
    console.log("Outside if value of j: "+j) 
    if(j==3){
        console.log("j value: "+j)         
        continue
    }
    if(j==4){
        console.log("Break")
        break
    }
}


let swt = 5
switch (swt) {
    case 4:
        console.log("Value: 4")
        break;
    case 5:
        console.log("Value: 5")
    default:
        break;
}
