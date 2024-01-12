function bubbleSort(Arr){
 for(var i=0;i<Arr.length-1; i++){
    for(var j=0; j<(Arr.length-i-1); j++){
       if(Arr[j]>Arr[j+1]){
            var temp = Arr[j];
            Arr[j]= Arr[j+1];
            Arr[j+1]=temp;
       }
    }
  }
  console.log(Arr);
}

var Arr= [2,4,1,5,4]

bubbleSort(Arr)