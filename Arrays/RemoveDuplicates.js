function removeDuplicate(Arr){
    for(let i=0; i<Arr.length; i++){
        for(let j=1; j<Arr.length; j++ ){
            if(Arr[i]!==Arr[j]){
                i++
                Arr[i]=Arr[j];
            }
        }
        return i+1;
    }
    
}

var Arr=[1,1,3,5,5,9,10,10];

var K=removeDuplicate(Arr)

for(let i=0; i<K; i++){
    console.log(Arr[i]);
    
}