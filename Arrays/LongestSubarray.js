 function LongSub(Arr,num){
    let sum=0; 
    let count=0; 
   for(let i=0; i<Arr.length; i++){
      sum+=Arr[i];
      if(sum==num)
   }
   console.log(sum)
 }

 let Arr =[1,3,2,3]
 let num=5 

 LongSub(Arr)