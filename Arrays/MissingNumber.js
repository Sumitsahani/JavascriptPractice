function missingNum(Arr){
    let total= ((Arr.length+1)*(Arr.length+2))/2;
    for(let i=0; i<Arr.length; i++){
        total=total-Arr[i];
    }
    console.log(total)
}

let Arr =[6,1,2,8,3,4,7,10,5]
missingNum(Arr)