
function MaxCon(Arr){
    let count=0;
    let max=0;
    for(let i=0; i<Arr.length; i++){  
           if(Arr[i]==1){
               count++;
           }else{
            count=0;
           }
           if(count>max){
            max=count;
           }
    }
    console.log(max);
}

var Arr=[1, 1, 0, 1, 1, 1];
MaxCon(Arr)