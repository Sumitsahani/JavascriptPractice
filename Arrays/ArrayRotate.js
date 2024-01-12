function arrayRotate(Arr){
    var temp =Arr[0];
    for(let i=0; i<Arr.length; i++){
       Arr[i]=Arr[i+1];
    }
    Arr[Arr.length-1]=temp;
    for(let i=0; i<Arr.length; i++){
        console.log(Arr[i]);
    }
}

let Arr =[1,3,4,6,7];
arrayRotate(Arr)

[]